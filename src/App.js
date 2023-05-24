import logo from "./logo.svg";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import AdminDashbaord from "./AdminPanel/AdminDashbaord";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Bestow";
import BestowForm from "./Containers/Forms/BestowForm";
import DiamondForm from "./Containers/Forms/DiamondForm";
import SoftTouchForm from "./Containers/Forms/SoftTouchForm";
import Bestow from "./components/Bestow";
import Diamond from "./components/Diamond";
import SoftTouch from "./components/SoftToch";
import AboutUs from "./AdminPanel/AboutUs";
import NavBar from "./AdminPanel/NavBar";
import Footer from "./AdminPanel/Footer";
import ContactUsPage from "./AdminPanel/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Home" element={<Hero />} />
        <Route path="/bestow" element={<Bestow />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/softtouch" element={<SoftTouch />} />
        <Route path="/ProductCatalog" element={<ProductCatalog />} />
        <Route path="/Admin" element={<AdminDashbaord />} />
        <Route path="/bestowform" element={<BestowForm />} />
        <Route path="/diamondform" element={<DiamondForm />} />
        <Route path="/softtouchform" element={<SoftTouchForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
