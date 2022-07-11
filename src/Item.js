import {useState} from 'react'
import './styles/Item.css'

export default function Item(prod) {
    // I'm only extracting 1 object from the array to demo
    const [item, setItem] = useState(prod.product[0])
    const [count, setCount] = useState(1)
    // price from data is string, this removes the $ sign and converts it to int
    const [price, setPrice] = useState(parseInt(item.salePrice.replace("$", "")))
    const [baselinePrice, setBaselinePrice] = useState(parseInt(item.salePrice.replace("$", "")))
    const [originalPrice, setOriginalPrice] = useState(parseInt(item.originalPrice.replace("$", "")))
    const [originalBaseline, setOriginalBaseline] = useState(parseInt(item.originalPrice.replace("$", "")))
    console.log(prod)
    const removeOne = () => {
        if (count !== 0) {
            setCount((prevCount) => prevCount - 1)
            setPrice((prevPrice) => prevPrice - baselinePrice)
            setOriginalPrice((prevOriginalPrice) => prevOriginalPrice - originalBaseline )
        }
    }

    const addOne = () => {
        setCount((prevCount) => prevCount + 1)
        setPrice((prevPrice) => prevPrice + baselinePrice)
        setOriginalPrice((prevOriginalPrice) => prevOriginalPrice + originalBaseline )
    }
    return (
        <div className="item__wrapper">
            <div className="item__wrapper-thumbnail">
                <div className="item__wrapper-thumbnail--image">
                    <img src={item.imageUrl} alt={item.name} />
                    <div className="item__wrapper-thumbnail--discount">-{item.percentOff}%</div>
                </div>
            </div>
            <div className="item__wrapper-description">
                <div className="item__wrapper-description--title">{item.name} <span>{item.description.substring(0, 50)}</span></div>
                <div className="item__wrapper-description--controls">
                    <div onClick={() => removeOne()}>
                        -
                    </div>
                    <div>
                        {count}
                    </div>
                    <div onClick={() => addOne()}>
                        +
                    </div>
                </div>
                <div className="item__wrapper-description--value">
                    ${price} <strike>${originalPrice}</strike>
                </div>
            </div>
            

        </div>
    )
}