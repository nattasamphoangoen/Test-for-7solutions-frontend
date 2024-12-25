import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Test1 from "./Test1";
import Test2 from "./Test2";

const AppRountes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="/test2" element={<Test2 />} />
    </Routes>
  );
};

export default AppRountes;
