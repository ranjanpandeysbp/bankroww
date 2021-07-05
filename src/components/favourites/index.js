import React from "react";
import "./favourites.css";
import FavTable from "./fav-table";
function Favourites() {
  return (
    <div className="fav-banks">
      <div className="fav-banks-table">
        <FavTable />
      </div>
    </div>
  );
}

export default Favourites;
