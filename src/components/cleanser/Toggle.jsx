import React, { useState } from "react";
import "./Categories.css"

export const Toggle = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sort1">
        <div className="sort">
      <div className="sort2a" onClick={() => setToggle(!toggle)}>Sort By:</div>
      {toggle && <div>{props.children}</div>}
      </div>
    </div> 
  );
};
export const Toggle2 = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sort3">
        {/* <div className="border-box"> */}
      <div className="sort2a" onClick={() => setToggle(!toggle)}>{props.name}</div>
      {toggle && <div>{props.children}</div>}
      {/* </div> */}
    </div>
  );
};
