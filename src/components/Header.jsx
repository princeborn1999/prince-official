import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/modeActions";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";

import anime from "animejs";
function Header() {
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
      <div className="flex justify-center py-2" aria-label="title">
        <h1 className="font-bold text-xl">DEVELOPER DIARY</h1>
      </div>
      <nav className="my-nav flex ml-auto" aria-label="nav">
        <Link to="">
          <button className="text-xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">HOME</button>
        </Link>
        <Link to="/experience">
          <button className="text-xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">EXPERIENCE</button>
        </Link>
        <Link to="/project">
          <button className="text-xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">PROJECT</button>
        </Link>
        {/* <Link to="/interest">
          <button className="text-xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">INTEREST</button>
        </Link> */}
        <a href ="https://github.com/princeborn1999" target="_blank">
          <button className="text-xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">GITHUB</button>
        </a>
        <Link to="/more">
          <button className="text-xl font-bold mx-4 py-2 px-4 border-b-4 border-yellow-300 hover:border-yellow-500">MORE</button>
        </Link>
      </nav>
    </header>

    // <header className={`flex p-5 shadow-md ${mode ? "bg-black" : "bg-white"}`}>
    //   <h1 className="font-bold text-2xl">DEVELOPER DIARY</h1>
    //   <div aria-label="nav" className="flex justify-center w-full">
    //     <div className="my-nav">
    //       <Link to="/">
    //         <Button>HOME</Button>
    //       </Link>
    //       <Link to="/experience">
    //         <Button>EXPERIENCE</Button>
    //       </Link>
    //       <Link to="/interest">
    //         <Button>Interest</Button>
    //       </Link>
    //       <Link to="/more">
    //         <Button>MORE</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </header>
  );
}

export default Header;
