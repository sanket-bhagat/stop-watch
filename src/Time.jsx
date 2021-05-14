import React from "react";

export default function Time(props) {
  return (
    <div className="col-3">
      <span className="number">
        {props.time < 10 && "0"}
        {props.time}
      </span>
    </div>
  );
}
