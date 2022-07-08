import {useState} from 'react'
import './item.css'

export default function Item(product) {
    // I'm only extracting 1 object from the array
    console.log(product.product)
    const [item, setItem] = useState(product.product[0])
    const [count, setCount] = useState(1)
    
    // const removeOne = () => {
    //     setCount((prevCount) => prevCount - 1)
    // }
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
                    <div>
                        -
                    </div>
                    <div>
                        {count}
                    </div>
                    <div>
                        +
                    </div>
                </div>
                <div className="item__wrapper-description--value">
                    {item.salePrice} <strike>{item.originalPrice}</strike>
                </div>
            </div>
            

        </div>
    )
}