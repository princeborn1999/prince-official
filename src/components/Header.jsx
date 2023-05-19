import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/modeActions";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import anime from "animejs";
import Nav1 from "./Nav/Nav1";
import Nav2 from "./Nav/Nav2";
import Nav3 from "./Nav/Nav3";
import Nav4 from "./Nav/Nav4";
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
    <header className="shadow-lg p-5">
      <div className="flex justify-center" aria-label="title">
        <h1 className="font-bold text-2xl">DEVELOPER DIARY</h1>
      </div>
      <Nav1 />
      <Nav2 />
      <Nav3 />
      <Nav4 />
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
