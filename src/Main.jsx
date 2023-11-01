import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Main;
