import React from "react";
import Logo from "../assets/images/logo-big.svg";
import Buttons from "./components/Buttons";
import "../public/fonts.css"

function App() {
  return (
    <>
      <img src={Logo} className="w-52 mx-auto mb-5 Vazirmatn" />
      <Buttons />
      <p className="text-lite text-sm sm:text-base mt-5">
          تمامی حقوق برای
        <a href="https://tarahandigital.com" className="underline mx-2">
          طراحان دیجیتال
        </a>
        محفوظ است.
      </p>
    </>
  );
}

export default App;
