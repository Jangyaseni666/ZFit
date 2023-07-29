import Care from "./pages/Care/care";
import Product from "./pages/Product/product";
// import Cart from "./Components/cart/cart";
import Payment from "./pages/Payment/payment";
import { Routes, Route } from "react-router-dom";
import MindPage from "./pages/Mind/mind";
import Fitness from "./pages/Fitness/fitness";
import Signup from "./pages/SignUp/signup";
import ProfileUpdate from "./pages/Profile/profile";
import OrderHistory from "./pages/OrderHistory/orderhistory";
import Homepage from "./pages/Homepage/homepage";
import ZPassElite from "./pages/Plans/zpasselite";
import ZPassPro from "./pages/Plans/zpasspro";
import ZPassHome from "./pages/Plans/zpasshome";
import AdminPanel from "./pages/Admin/admin";
// import FitnessUpper from "./pages/Fitness/fitnessupper/fitnessupper";
// import AdminPanel from "./pages/care_temp/admin";
// import Navbar from "./Components/cart/navbar";
// import Homepage from "./pages/home/homepage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/care" element={<Care />} />
      <Route path="/mind" element={<MindPage />} />
      <Route path="/product" element={<Product/>}/>
      <Route path="/fit" element={<Fitness/>}/>
      <Route path="/profile" element={<ProfileUpdate/>}/>
      <Route path="/history" element={<OrderHistory/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/home" element={<ZPassHome/>}/>
      <Route path="/elite" element={<ZPassElite/>}/>
      <Route path="/pro" element={<ZPassPro/>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
      {/* <Route path="/fit" element={<FitnessUpper/>}/> */}
      {/* <Route path="/cart" element={<Cart/>}/> */}
      <Route path="/payment" element={<Payment/>}/>
      {/* <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/nav" element={<Navbar/>}/>
      <Route path="/home" element={<Homepage/>}/> */}
    </Routes>
  );
}

export default AllRoutes;
