import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content';
import Mobile from './components/Mobile';
import Header from './components/Header';
import Home from './components/Home';
import inEarBluetooth from './Data/headphoneInEar'
// import Login from './components/Login';

function App() {

    const name = "Muskan"
    const city = "Nagpur"
    const pincode = "440014"

    function addToCart(product){

    }
  

  return (
    <div className="App">      
      <BrowserRouter>
      <Header info = {{name, city, pincode}}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path='/mobile' element={<Mobile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Content/>
// <Login/>