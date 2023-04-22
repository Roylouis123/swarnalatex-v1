import logo from './logo.svg';

import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Product from './components/Product';

import AdminDashbaord from './AdminPanel/AdminDashbaord'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bestow from './Containers/Bestow';

function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/Home" element={<Hero />}/>
          <Route path="/Product" element={<Product />}/>
          <Route path="/ProductCatalog" element={<ProductCatalog/>}/>
          <Route path="/Admin" element={<AdminDashbaord/>}/>
          <Route path="/Bestow" element={<Bestow/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}
export default App;
