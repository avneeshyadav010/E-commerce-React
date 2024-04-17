import { useDispatch } from 'react-redux';
import { wishListaction } from '../store/wishlist';
import { Link } from 'react-router-dom';

const WishListItem = ({ items }) => {
    const dispatch = useDispatch();
    const RemoveWishList = (id) => {
        dispatch(wishListaction.removefromWishList(id))
    }
    console.log("WishList", items);
    return (
        <>

            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative cart_box">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">{items.brand}</strong>
                    <h3 className="mb-0">{items.title}</h3>
                    <div className="mb-1 text-body-secondary">${items.price}</div>
                    <p className="card-text mb-auto">{items.description}</p>
                    <p className="card-text mb-auto">Discount: {items.discountPercentage}%</p>
                    <Link to={`/product/${items.id}`}>View Prodict Details</Link>
                    <button onClick={() => RemoveWishList(items.id)} className="btn btn-light rounded-pill px-3 removefromwishList" type="button">Remove</button>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={items.images[0]} alt="Image"></img>
                </div>
            </div>

        </>
    )
}
export default WishListItem;