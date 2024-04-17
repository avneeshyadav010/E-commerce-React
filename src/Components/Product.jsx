import { useNavigate } from "react-router-dom";
const Product = ({ items }) => {
   // console.log(items)
    const navigate = useNavigate();
    const handleProductDetails = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <>
            <div className="product-container">
                <div className="title">
                    <h2>{items.title}</h2>
                </div>
                <div className="product-img">
                <img src={items.images[0]} alt="Image"></img>
                </div>
                <p className="price">Price: ${items.price}</p>
                <button onClick={() => handleProductDetails(items.id)} className="btn btn-light rounded-pill px-3" type="button">View Product Details</button>
            </div>
        </>
    )
}
export default Product;