import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./header.css";
function Header() {
  const tabName = window.location.pathname.substring(1);
  const [tab, setTab] = useState(tabName);
  return (
    <div className="header">
      <label className="logo">Bankroww</label>
      <div className="header-menu">
        <Link to="/all-banks">
          <label
            className={`menu-option ${tab === "all-banks" && "active-tab"}`}
            onClick={() => setTab("all-banks")}
          >
            All Banks
          </label>
        </Link>
        <Link to="/favourites">
          <label
            className={`menu-option ${tab === "favourites" && "active-tab"}`}
            onClick={() => setTab("favourites")}
          >
            Favourites
          </label>
        </Link>
      </div>
    </div>
  );
}

export default Header;
