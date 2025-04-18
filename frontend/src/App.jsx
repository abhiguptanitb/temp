import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookReviews from "./pages/BookReviews";
import Phone from "./pages/Phone";
import useLenisScroll from "./useLenis"

const App = () => {
  useLenisScroll();
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book" element={<BookReviews/>} />
        <Route path="/phone" element={<Phone/>} />
      </Routes>
  );
};

export default App;