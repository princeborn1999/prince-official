import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Button } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Switch from "@mui/material/Switch";

function Header() {
  return (
    <header className="flex p-5">
      <FingerprintIcon arial-label="logo" />
      <div aria-label="nav" className="flex justify-center w-full">
        <div>
          <Link to="/">
            <Button>HOME</Button>
          </Link>
          <Link to="/experience">
            <Button>EXPERIENCE</Button>
          </Link>
          <Link to="/interest">
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
