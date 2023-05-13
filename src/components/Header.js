import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "@mui/material";
function Header() {
  return (
    <header className="flex">
      <div className="flex shadow-md">
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
