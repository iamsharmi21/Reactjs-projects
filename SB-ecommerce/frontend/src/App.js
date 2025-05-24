import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/productCard';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {
  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem)
  return (
    <div className="App">
      <Router>
          <div>
            <ToastContainer theme='dark' position="top-center"/>
            <Header cartItem={cartItem} />
            <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Home />}></Route>
            <Route path='/product/:id' element={<ProductDetail cartItem={cartItem} setCartItem={setCartItem} />}></Route>
            <Route path='/cart' element={<Cart cartItem={cartItem} setCartItem={setCartItem} />}></Route>
            </Routes>
            <Footer />
          </div>

      </Router>
    </div>
  );
}

export default App;
