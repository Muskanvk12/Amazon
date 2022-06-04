import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import Home from './components/Home';
// import Login from './components/Login';

function App() {

    const name = "Muskan"
    const city = "Nagpur"
    const pincode = "440014"
  

  return (
    <div className="App">      
      <BrowserRouter>
      <Header info = {{name, city, pincode}}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/content' element={<Content/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Content/>
// <Login/>