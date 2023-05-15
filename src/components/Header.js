import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Switch from "@mui/material/Switch";
import anime from 'animejs';
function Header() {
  useEffect(()=>{
    anime({
      targets: '.my-nav',
      translateY: [{ value: -100, duration: 500 },
                   {value: 0, duration: 800, easing: 'easeOutBounce'}],
      opacity: [ {value: 0, duration: 500}, {value: 1, duration: 800} ],
      delay: 500,
    })
  },[])
  return (
    <header className="flex p-5">
      <FingerprintIcon arial-label="logo" />
      <div aria-label="nav" className="flex justify-center w-full">
         <div className="my-nav">
          <Link to="/">
            <Button >HOME</Button>
          </Link>
          <Link to="/experience" >
            <Button>EXPERIENCE</Button>
          </Link>
          <Link to="/interest" >
            <Button>Interest</Button>
          </Link>
        {/* MORE在另一種模式才會出現 */}
          <Link to="/more">
            <Button>MORE</Button>
          </Link>
        </div>
      </div>
      <div>
        <Switch />
      </div>
    </header>
  );
}

export default Header;
