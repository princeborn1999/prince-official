import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
function Header() {
  return (
    <header className="flex p-5">
      <FingerprintIcon />
      <div className="flex">
        <Link to="/">
          <Button>HOME</Button>
        </Link>
        <Link to="/skill">
          <Button>SKILL</Button>
        </Link>
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
    </header>
  );
}

export default Header;
