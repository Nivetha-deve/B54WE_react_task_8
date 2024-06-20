import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProduct } from "./Carts";

const Product = ({id, title, description, price, brand, images }) => {
   const dispatch = useDispatch();
   return(
    <div className="product">
       <p>Id:{id}</p>
       <p>Title:{title}</p>
       <p>Description:{description}</p>
       <p>Price:{price}</p>
       <p>Brand:{brand}</p>
       <img src={images} alt={title} />
       <button className="btn" onClick={() => dispatch(addProduct({id, title, description, price, brand, images}))}>Add to Cart</button>
    </div>
   )
}

Product.propTypes = {
 id:PropTypes.number,
 title:PropTypes.string,
 description:PropTypes.string,
 price:PropTypes.number,
 brand:PropTypes.string,
 images:PropTypes.string,
}
export default Product;

