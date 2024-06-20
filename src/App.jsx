import { Provider } from 'react-redux'
import './App.css'
import Products from './component/Products'
import store from './component/store/Store';
import CartRedux from './component/Cart';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
     
  const productData = [
    {
      
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple and are famous for their privacy and security systems",
      "price": 549,
      "brand": "Apple",
      "images": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F03%2Fapple-iphone-9-plus-rumors-001.jpg?cbr=1&q=90",
    },
      {
        "id": 2,
        "title": "iPhone X",
        "description": " Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
        "price": 899,
        "brand": "Apple",
        "images": "https://5.imimg.com/data5/SELLER/Default/2021/1/SK/CX/II/14753644/iphone-x-500x500.jpg",           
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "brand": "Samsung",
      "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq128fcoftk8W57XoZE9xABLAGUKolUbARqA&s"
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "brand": "OPPO",
      "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxaypsrTQ6hVqaTF3krUIckoMeo4TasAfXA&s",
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s  P30 Pro New Edition made in Germany and now the device has made its way to the UK.",
      "price": 499,
      "brand": "Huawei",
      "images": "https://www.digitaltrends.com/wp-content/uploads/2019/03/huawei-p30-hands-on-feat.jpg?resize=1200%2C630&p=1",
    },
    {
      "id": 6,
      "title": "Redmi Note 10 pro",
      "description": "Redmi Note 10 Pro New Edition was made in Germany and now the device has made its way to the UK.",
      "price": 799,
      "brand": "MI",
      "images": "https://cdn.mos.cms.futurecdn.net/P2fk47aXcxbY4dj6t58XCg.jpg",
    },
  ];

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Link className='prod' to="/">Products</Link>
      <Link to="/cart">
       <i className="fa fa-shopping-cart"></i>
       </Link>
      <Routes>
     <Route path='/' element={<Products productData={productData} />} />
     <Route path='/cart' element={<CartRedux />} />
     </Routes>
     </BrowserRouter>
    </Provider>
  )
}
export default App;

