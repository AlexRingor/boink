
import {useState} from 'react'
import Option from './Sizes/Option'
import './sizes.css'

export default function Sizes(product) {
    const [item, setItem] = useState(product.product[0])
    console.log(product.product[0].sizes)
    return (
        <div className="sizes__wrapper">
            <div className="sizes__wrapper-title">
                <div className="sizes__wrapper-title--container">
                    <img src={item.imageUrl} alt={item.name}/>
                    <div  className="sizes__wrapper-title--heading">{item.name}</div> 
                </div>
                <span>{item.description.substring(0, 30)}</span>
            </div>
            <div className="sizes__wrapper-price">
                <span>{item.salePrice}</span> <strike>{item.originalPrice}</strike>
            </div>
            <div className="sizes__wrapper-options">
                    {item.sizes.length ? (
                        item.sizes.map((i, index) => (
                            <Option 
                                key={index}
                                sizeLabel={i.label}
                                isAvailable={i.isAvailable}
                            />
                        ))
                    ) : null
                    }
                
            </div>
        </div>
    ) 
}