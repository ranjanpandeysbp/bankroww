import React from "react";
import { useState } from "react";
import "./show-dropdown.css";
import { showSizes } from "../../../constants/banks/index";
function ShowDropdown(props) {
  const { updateShowSize } = props;
  const [open, setOpen] = useState(false);
  const changeHandler = () => {
    setOpen(!open);
  };
  const handleSelected = (size) => {
    updateShowSize(size);
    changeHandler();
  };
  return (
    <div className="show-dropdown">
      <div className="show-text">show</div>
      <div className="dropdown-container">
        <div className="dropdown">
          <div>10</div>
          <div
            className="down-arrow"
            onClick={changeHandler}
            role="presentation"
          >
            {open ? (
              <i class="fi-rr-angle-up"></i>
            ) : (
              <i class="fi-rr-angle-down"></i>
            )}
          </div>
        </div>
        {open ? (
          <div className="show-list">
            {showSizes.map((size) => {
              return (
                <div
                  className="option"
                  data-option={size}
                  onClick={() => handleSelected(size)}
                  role="presentation"
                >
                  {size}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ShowDropdown;
