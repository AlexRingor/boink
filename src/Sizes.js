import {useState} from 'react'
import Option from './Sizes/Option'
import './sizes.css'

export default function Sizes(product) {
    const [item, setItem] = useState(product.product[0])
    console.log(product.product[0].sizes)
    return (
        <div className="sizes__wrapper">
            <div className="sizes__wrapper-title">
                <img src={item.imageUrl} alt={item.name}/>{item.name} <br/> <span>{item.description.substring(0, 30)}</span>
            </div>
            <div className="sizes__wrapper-price">
                {item.salePrice} {item.originalPrice}
            </div>
            <div className="sizes__wrapper-options">
                {item.sizes.map((size, index) => {
                    <Option 
                    />
                })}
                <div className="sizes__wrapper-options--spec">
                
                </div>
                
            </div>
        </div>
    ) 
}