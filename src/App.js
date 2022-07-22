import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content';
import Mobile from './components/Mobile';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Data from './Data/productsData'
import inEarBluetooth from './Data/headphoneInEar'
// import Login from './components/Login';

function App() {

    const name = "Muskan"
    const city = "Nagpur"
    const pincode = "440014"

    const [cart, setcart] = useState([]);

    function addToCart(product){
      console.log('clicked on add to cart')
      const productInCart = cart.find((ele)=> ele.id === product.id)

      if(productInCart){
        setcart(cart.map((ele)=>ele.id===product.id? {...productInCart, quantity : productInCart.quantity + 1} : ele))
      }
      else{
        setcart([...cart, {...product, quantity:1}])
      }
    }

    function decrement(product){
      if(product.quantity === 1){
        setcart(cart.filter((ele)=>ele.id !== product.id))
      }
      else{
        setcart(cart.map((ele)=>ele.id === product.id?{...product, quantity:product.quantity-1}:ele))
      }
    }

    function removeFromCart(product){
         setcart(cart.filter((ele)=>ele.id !== product.id))
    }
    let cartLength = cart.length

  return (
    <div className="App">      
      <BrowserRouter>
      <Header info = {{name, city, pincode, cartLength}}/>
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path='/mobile' element={<Mobile data = {{Data, addToCart}}/>}/>
          <Route path='/cart' element={<Cart cartData = {{cart, addToCart, removeFromCart, decrement}}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Content/>
// <Login/>