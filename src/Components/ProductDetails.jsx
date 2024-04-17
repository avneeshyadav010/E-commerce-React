import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { cartAction } from "../store/cart";
import { wishListaction } from "../store/wishlist";
import RatingComponent from "./Rating";
import Modal from './Modal'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductDetails = () => {
   const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const handleProductDetails = (id) => {
        navigate(`/product/${id}`)
    }
    const dispatch = useDispatch();
    const handleAddtoCart = (productdata) => {
        dispatch(cartAction.addToCart(productdata))
    }
    const handleAddtoWishList = (productdata) => {
        dispatch(wishListaction.addtoWishList(productdata))
    }

    const Data = useLoaderData();
    console.log(Data)
    const productdata = Data.productData;
    const crouselProducts = Data.productsData.products;
    console.log("crousel", crouselProducts)

    const handleNext = ()=> {
        setIndex(index => {
            if(index == crouselProducts.length - 3)
            return 0;
            else
            return index + 3;
        })
    }
    const handlePrev = ()=> {
        setIndex(index => {
            if(index == 0)
            return crouselProducts.length - 3;
            else
            return index - 3;
        })
    }
    console.log(productdata)
    return (
        <>
            <div className="card">
                <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">{productdata.title}</h2>
                    </div>
                    <div className=" shadow-sm mx-auto" style={{ width: "71%", borderRadius: "21px 21px 0 0" }}>
                        <img src={productdata.images[0]} alt="Image"></img>
                        <div>
                            <Modal srcProps={productdata.images[0]} imgTitle={productdata.title} />
                        </div>
                        <p className="lead" style={{ color: "white", fontSize: "1.2rem", fontWeight: "500", padding: "1rem 0" }}>Price: ${productdata.price}</p>
                        <p className="lead">{productdata.description}</p>
                        <button onClick={() => handleAddtoCart(productdata)} className="btn btn-light rounded-pill px-3" type="button">Add To Cart</button>
                        <button onClick={() => handleAddtoWishList(productdata)} className="btn btn-light rounded-pill px-3" type="button">Add To Wishlist</button>
                    </div>
                    <div className="rating">
                        <RatingComponent />
                    </div>
                    <div>
                        <div className="product-des">
                            <table className="table table-dark table-striped" style={{ width: "70%", margin: "2rem 1rem" }}>
                                <tbody>
                                    <tr>
                                        <th scope="row">Brand</th>
                                        <td>{productdata.brand}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Category</th>
                                        <td>{productdata.category}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Discount Percentage</th>
                                        <td>{productdata.discountPercentage}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rating</th>
                                        <td>{productdata.rating}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Stock</th>
                                        <td>{productdata.stock}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="crousel-constainer">
            <div id="left">
                <button onClick={handlePrev}>&#8249;</button>
            </div>
            <div className="product-crousel">
                <div>
                    <div className="product-container">
                        <div className="title">
                            <h2>{crouselProducts[index].title}</h2>
                        </div>
                        <div className="product-img">
                            <img src={crouselProducts[index].images[0]} alt="Image"></img>
                        </div>
                        <p className="price">Price: ${crouselProducts[index].price}</p>
                        <button onClick={() => handleProductDetails(crouselProducts[index].id)} className="btn btn-light rounded-pill px-3" type="button">View Product Details</button>
                    </div>
                </div>
                <div>
                    <div className="product-container">
                        <div className="title">
                            <h2>{crouselProducts[index+1].title}</h2>
                        </div>
                        <div className="product-img">
                            <img src={crouselProducts[index+1].images[0]} alt="Image"></img>
                        </div>
                        <p className="price">Price: ${crouselProducts[index+1].price}</p>
                        <button onClick={() => handleProductDetails(crouselProducts[index+1].id)} className="btn btn-light rounded-pill px-3" type="button">View Product Details</button>
                    </div>
                </div>
                <div>
                    <div className="product-container">
                        <div className="title">
                            <h2>{crouselProducts[index+2].title}</h2>
                        </div>
                        <div className="product-img">
                            <img src={crouselProducts[index+2].images[0]} alt="Image"></img>
                        </div>
                        <p className="price">Price: ${crouselProducts[index+2].price}</p>
                        <button onClick={() => handleProductDetails(crouselProducts[index+2].id)} className="btn btn-light rounded-pill px-3" type="button">View Product Details</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <button onClick={handleNext}>&#8250;</button>
            </div>
            </div>
        </>
    )
}

export const ProductDetailsLoader = async ({ params }) => {
    const product = await fetch(`https://dummyjson.com/products/${params.id}`);
    const productData = await product.json();
    const products = await fetch('https://dummyjson.com/products');
    const productsData = await products.json();
    return {productData, productsData}
}


export default ProductDetails;