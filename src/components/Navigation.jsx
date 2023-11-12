import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <li>
        {" "}
        <NavLink
          to="home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </NavLink>
      </li>
    </>
  );
};

export default Navigation;
