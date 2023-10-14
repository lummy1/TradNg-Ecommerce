
import './App.css';
import Home from './pages/Home';

import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const App = () =>{
 const user = '';
  return(
    <BrowserRouter >
    <Routes>
      <Route exact path="/" element={<Home/>}  errorElement={<ErrorPage /> } />  
      <Route exact path="/products/:category" element={<ProductList/>} />  
      <Route exact path="/product/:id" element={<SingleProduct/>} />  
      <Route exact path="/cart" element={<Cart/>} />  
      <Route exact path="/login" element={ user? <Navigate to="/" /> : <Login />} />  
      <Route exact path="/register" element={ user? <Navigate to="/" /> : <Register />} />  
    </Routes>
  </BrowserRouter>
    
  )
}


export default App;
