import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  const [tab, setTab] = useState("All Banks");
  return (
    <div className="header">
      <label className="logo">Bankroww</label>
      <div className="header-menu">
        <Link to="/all-banks">
          <label
            className={`menu-option ${tab === "All Banks" && "active"}`}
            onClick={() => setTab("All Banks")}
          >
            All Banks
          </label>
        </Link>
        <Link to="/favourites">
          <label
            className={`menu-option ${tab === "Favourites" && "active"}`}
            onClick={() => setTab("Favourites")}
          >
            Favourites
          </label>
        </Link>
      </div>
    </div>
  );
}

export default Header;
