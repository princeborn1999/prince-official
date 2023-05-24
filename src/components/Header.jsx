import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/modeActions";
import { Link,useLocation } from "react-router-dom";
import Switch from "@mui/material/Switch";

import anime from "animejs";
function Header() {
  const location = useLocation();
  const activeClass = 'text-2xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-300'
  const unactiveClass = 'text-xl text-gray-800 font-bold mx-4 py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-500'
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);
  const handleModeToggle = () => {
    dispatch(toggleMode());
  };
  useEffect(() => {
    anime({
      targets: ".my-nav",
      translateY: [
        { value: -100, duration: 500 },
        { value: 0, duration: 800, easing: "easeOutBounce" },
      ],
      opacity: [
        { value: 0, duration: 500 },
        { value: 1, duration: 800 },
      ],
      delay: 500,
    });
  }, []);
  return (
    <header className="shadow-lg flex p-5">
      <div className="flex justify-center py-2" aria-label="title" >
        <h1 className="font-bold text-xl">DEVELOPER DIARY</h1>
      </div>
      <nav className="my-nav flex ml-auto " aria-label="nav" >
        <Link to="">
          <button className={location.pathname === '/' ? activeClass : unactiveClass}>HOME</button>
        </Link>
        <Link to="/experience">
          <button className={location.pathname === '/experience' ? activeClass : unactiveClass}>EXPERIENCE</button>
        </Link>
        <Link to="/project">
          <button className={location.pathname === '/project' ? activeClass : unactiveClass}>PROJECT</button>
        </Link>
        {/* <Link to="/interest">
          <button className="text-xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">INTEREST</button>
        </Link> */}
        <a href ="https://github.com/princeborn1999" target="_blank">
          <button className={unactiveClass}>GITHUB</button>
        </a>
        <Link to="/more">
          <button className={location.pathname === '/more' ? activeClass : unactiveClass}>MORE</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
