import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import SearchPage from "./pages/SearchPage";

function App() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/search-results" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
