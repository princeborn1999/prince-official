import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/modeActions";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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
    <header className={`flex p-5 shadow-md ${mode ? "bg-black" : "bg-white"}`}>
      {/* 之後放ICON */}
      <h1 className="font-bold text-2xl">DEVELOPER</h1>
      {/* <TbLetterA size={30} color={`${mode ? "white" : "black"}`} /> */}
      <div aria-label="nav" className="flex justify-center w-full">
        <div className="my-nav">
          <Link to="/">
            <Button>HOME</Button>
          </Link>
          {/* <Link to="/work">
            <Button>WORK</Button>
          </Link> */}
          <Link to="/experience">
            <Button>EXPERIENCE</Button>
          </Link>
          <Link to="/interest">
            <Button>Interest</Button>
          </Link>
          <Link to="/more">
            <Button>MORE</Button>
          </Link>
        </div>
      </div>
      {/* <Switch checked={mode} onChange={handleModeToggle} color="default" /> */}
    </header>
  );
}

export default Header;
