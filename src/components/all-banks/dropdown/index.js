import React from "react";
import { useState } from "react";
import "./dropdown.css";

function Dropdown({ options }) {
  const [open, setOpen] = useState(false);
  const changeHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="topic-dropdown">
      <div className="current-topic">
        <div className="main-topic">Search Category</div>
        <div className="down-arrow" onClick={changeHandler} role="presentation">
          {open ? (
            <i class="fi-rr-angle-up"></i>
          ) : (
            <i class="fi-rr-angle-down"></i>
          )}
        </div>
      </div>
      {open ? (
        <div className="topic-list">
          {options.map(({ types, category }) => {
            return (
              <div className="topic-list-item">
                <div className="sub-topic-list">
                  {types.map((item) => {
                    return (
                      <div
                        className="sub-topic-item"
                        onClick={() => console.log("Hello")}
                        role="presentation"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
