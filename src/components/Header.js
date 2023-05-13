import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "@mui/material";
import CastleRoundedIcon from "@mui/icons-material/CastleRounded";
import { Fingerprint } from "@mui/icons-material";
function Header() {
  return (
    <header>
      <div className="flex">
        <CastleRoundedIcon></CastleRoundedIcon>
        <BrowserRouter>
          <Link to="/">
            <Button>
              <Fingerprint />
              HOME
            </Button>
          </Link>
          <Link to="/skill">
            <Button>
              <Fingerprint />
              SKILL
            </Button>
          </Link>
          <Link to="/experience">
            <Button>
              <Fingerprint />
              EXPERIENCE
            </Button>
          </Link>
          <Link to="/interest">
            <Button>
              <Fingerprint />
              Interest
            </Button>
          </Link>
          <Link to="/more">
            <Button>
              <Fingerprint />
              MORE
            </Button>
          </Link>
        </BrowserRouter>
      </div>
    </header>
  );
}

export default Header;
