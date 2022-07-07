import {useState} from 'react'
import './item.css'

export default function Item(prod) {
    // I'm only extracting 1 object from the array
    const [item, setItem] = useState(prod.product[0])
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(parseInt(item.salePrice.replace("$", "")))
    const [baselinePrice, setBaselinePrice] = useState(parseInt(item.salePrice.replace("$", "")))
    console.log(prod)
    const removeOne = () => {
        if (count != 0) {
            setCount((prevCount) => prevCount - 1)
            setPrice((prevPrice) => prevPrice - baselinePrice)
        }
    }

    const addOne = () => {
        setCount((prevCount) => prevCount + 1)
        setPrice((prevPrice) => prevPrice + baselinePrice)
    }
    return (
        <div className="item__wrapper">
            <div className="item__wrapper-thumbnail">
                <div className="item__wrapper-thumbnail--image">
                    <img src={item.imageUrl} alt={item.name} />
                    <div class="item__wrapper-thumbnail--discount">-{item.percentOff}%</div>
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
                    ${price} <strike>{item.originalPrice}</strike>
                </div>
            </div>
            

        </div>
    )
}