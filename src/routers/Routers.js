// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import ServiceListing from "../pages/ServiceListing";
// import ServiceDetails from "../pages/ServiceDetails";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
// import NotFound from "../pages/NotFound";
// import Contact from "../pages/Contact";
// import Reg from "../pages/Register";
// import Profile from "../pages/userData";
// import TechReg from "../pages/TechReg";
// import PaymentDetails from "../pages/payment";
// import PaymentMethod from "../components/UI/PaymentMethod";
// import { selectUser } from "../features/userSlice";
// import { useSelector } from "react-redux";
// import Logout from "../pages/Logout";
// import Login from "../pages/Login";

// const Routers = () => {
//   const user = useSelector(selectUser);

//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home>{user ? <Logout /> : <Login />}</Home>} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/logout" element={<Logout />} />
//       <Route path="/payment" element={<PaymentDetails />} />
//       <Route path="/edit" element={<Profile />} />
//       <Route path="/tech" element={<TechReg />} />
//       <Route path="/register" element={<Reg />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<ServiceListing />} />
//       <Route path="/services/:slug" element={<ServiceDetails />} />
//       <Route path="/blogs" element={<Blog />} />
//       <Route path="/blogs/:slug" element={<BlogDetails />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/pay" element={<PaymentMethod />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default Routers;





import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ServiceListing from "../pages/ServiceListing";
import ServiceDetails from "../pages/ServiceDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login"; 
//import Logout from "../pages/Logout"; 
import Reg from "../pages/Register"; 
import Profile from "../pages/Profile"; 
import TechReg from "../pages/TechReg";
import PaymentDetails from "../pages/payment";
//import TechReg from "../UI/PaymentMethod";
import PaymentMethod from "../components/UI/PaymentMethod";
import UserData from "../pages/userData";
//import ServiceItem from "../components/UI/ServiceItem";
import Dashboard from "../pages/Dashboard";
import Pay from "../pages/payment";
import PageContent from "../Techdash/page";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="/payment" element={<PaymentDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/pp" element={<Pay />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/edit" element={<UserData />} />
      <Route path="/tech" element={<TechReg />} />
      <Route path="/register" element={<Reg />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServiceListing />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pay" element={<PaymentMethod />} />
      <Route path="/td" element={<PageContent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
