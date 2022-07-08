import './product.css'

export default function Product(product) {
    return (
        <div className="product__wrapper">
            <div className="product__wrapper-thumbnail">
                <div className="product__wrapper-container">
                    <div className={"product__wrapper-heart " + (product.isFav ? 'is-fav' : '')}>
                    <img className={"thumbnail "} src='./heart.svg' alt="heart" onClick={() => product.toggleFav(product.id)}/>
                    </div>
                </div>
            
            
                <img src={product.image}  alt={product.name}/>
            </div>
            <div className="product__wrapper-details">
                <h1>{product.name} <span>{product.desc.substring(0, 30)}</span></h1>
                <div className='product__wrapper-pricing'>{product.price}</div>
            </div>
        </div>
    )
}