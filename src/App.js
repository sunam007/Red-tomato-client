import { Routes, Route } from "react-router-dom";

import Header from "./Pages/Shared/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login.js/Login";
import Register from "./Pages/Register.js/Register";
import Footer from "./Pages/Shared/Footer";
import Dishes from "./Pages/Dishes/Dishes";

function App() {
  return (
    <>
      {/* After testing , move this router to a Layout Component */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dish/:foodCategory" element={<Dishes />} />
        <Route path="/cart/:idMeal" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
