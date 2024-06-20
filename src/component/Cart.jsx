import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./Carts";
import { useLocation, useNavigate } from "react-router-dom";
 
  const CartRedux = () => {
    const cartItem = useSelector(state => state.cart.products);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const location = useLocation();

    const handleInc = (id) => {
      dispatch(increaseQuantity(id));
    };
    const handleDec = (id) => {
      dispatch(decreaseQuantity(id));
    };

    const totalQty = cartItem.reduce((total,product) =>total+product.quantity,0);
    const totalAmount = cartItem.reduce((total,product) =>total+product.price*product.quantity,0)
  
     const isCartPage = location.pathname === "/cart";

    return(
      <div>
        {!isCartPage && (
        <div className="maincart" onClick={() => navigate('/cart') }>
        <i className="fa fa-shopping-cart"></i>
        {totalQty > 0 && (
           <span className="cart-badge">
            {totalQty}
          </span>
        )}
        </div>
        )}
         <div className="cart-content">
         <h1 className="no-prod">cart</h1>
         {cartItem.length === 0 ? (
          <p className="no-prod">No product added</p>
         ):(
          <div>
            {cartItem.map((prod) => (
              <div className="cart-item" key={prod.id}>
              <img src={prod.images} alt={prod.title} />
              <p>Title: {prod.title}</p>
              <p>Price: {prod.price}</p>
              <p>Quantity: {prod.quantity}</p>
              <button  onClick={() => handleInc(prod.id)}>+</button>
              <button  onClick={() => handleDec(prod.id)}>-</button>
              </div>
            ))}
            <div className="cart-summary">
              {/* <p>TotalQty: {totalQty}</p> */}
              <p>TotalAmount: {totalAmount}</p>
            </div>
            </div>
         )}
         </div>
      </div>
    );
  };
  export default CartRedux;