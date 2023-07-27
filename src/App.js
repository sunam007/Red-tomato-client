import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      {/* After testing , move this router to a Layout Component */}
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/dish/:foodCategory" element={<Dishes />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart/:idMeal"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckOut />
            </PrivateRoute>
          }
        />
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
