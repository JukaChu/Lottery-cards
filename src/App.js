import React from "react";

import "./App.css";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
