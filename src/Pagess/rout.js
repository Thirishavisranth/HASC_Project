import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../Pagess/customer";
import Dashboard from "../Pagess/dashboard";
import Inventory from "../Pagess/inventary";
import Orders from "../Pagess/orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;