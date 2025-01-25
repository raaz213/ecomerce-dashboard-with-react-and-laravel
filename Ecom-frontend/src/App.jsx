import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Regsiter from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import UpdateProduct from "./pages/UpdateProduct";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Regsiter/>} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/edit/:id" element={<UpdateProduct/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
