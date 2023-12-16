import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";


function App() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <Home /> */}
      <SingleProduct/>
    </div>
  );
}

export default App;
