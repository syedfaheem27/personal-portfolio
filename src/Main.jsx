import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";

const Main = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;
