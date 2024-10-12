import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navebar from "./Componet/Navbar/Navebar";
import Home from "./Componet/Home/Home";
import Footer from "./Componet/Footer/Footer";
import About from "./Componet/About/About";
import Shop from "./Componet/Shop/Shop";
import Services from "./Componet/Services/Services";
import Contact from "./Componet/Contact/Contact";
import More from "./Componet/MoreDetals/More";
import Carts from "./Componet/Carts/Carts";
import { useState } from "react";
import Swal from "sweetalert2";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    let selectedItem = cartItems.find((item) => item.id == product.id);
    if (selectedItem) {
      Swal.fire({
        title: "This Product Already Exists in Cart!",
        showConfirmButton: false,
        time: 1000,
        icon: "warning",
      });
    } else {
      setCartItems([...cartItems, product]);
      Swal.fire({
        title: "This Product Added In Cart SuccesFully!",
        time: 1000,
        showConfirmButton: false,
        icon: "success",
      });
    }
  }
  function deleteProduct(product) {
    setCartItems(cartItems.filter(item => item.id != product.id));
  }

  return (
    <div>
      <BrowserRouter>
        <Navebar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/More/:id" element={<More />} />
          <Route path="/carts" element={<Carts cartItems={cartItems} deleteProduct={deleteProduct}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
