import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
      <div className="flex flex-col items-center">
      <Navbar />
      <div className=" flex flex-col justify-center">
        <Routes>
          <Route 
          path="/" element={<Home />} 

          />
          <Route 
          path="/cart" element={<Cart />} 
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;