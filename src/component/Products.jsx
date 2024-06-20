/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Product from './Product';

const Products = ({ productData }) => {
return (
   <>
<div className="header">
<img src="https://img.pikbest.com/wp/202348/online-shopping-cart-icon-smartphone-3d-render-of-a-in-mobile-app-for_9773683.jpg!sw800"></img>
 </div>
<div className='main'>
{productData.map((prod) => (
<Product {...prod} key={prod.id} /> 
))}
</div>
</>
);
};

Products.propTypes = {
   id: PropTypes.number,
   title: PropTypes.string,
   description: PropTypes.string,
   price: PropTypes.number,
   brand: PropTypes.string,
   images: PropTypes.string,
};

export default Products;