import React from "react";

export default function Button(porps) {

  function handleClick(){
    porps.onClick();
  }

  return (
    <div className={"col " + porps.size}>
      <button className="btn btn-outline-light" onClick={handleClick}>
        <i className={"fas fa-" + porps.icon + " fa-2x"}></i>
      </button>
    </div>
  );
}
