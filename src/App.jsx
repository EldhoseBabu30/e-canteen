

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
BrowserRouter

function App() {
  

  return (
  
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
      
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
