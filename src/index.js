import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondPage from "./components/second-page/SecondPage";
import FirstPage from "./components/first-page/FirstPage";
import ScrollToTop from "./components/app-Router/ScrollToTop";
import ThirdPage from "./components/third-page/ThirdPage";
import "./index.css";
import App from "./App";
import FourthPage from "./components/fourth-page/FourthPage";


ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="firstpage" element={<FirstPage />} />
      <Route path="secondpage" element={<SecondPage />} />
      <Route path="thirdpage" element={<ThirdPage />} />
      <Route path="fourthpage" element={<FourthPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
