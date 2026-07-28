import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import LocationInfo from "./ LocationInfo";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Головна</Link> |{" "}
        <Link to="/products?category=phones#popular">Товари</Link> |{" "}
        <Link to="/contacts">Контакти</Link>
      </nav>
      <LocationInfo/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
   
    </>
  );
}

export default App;