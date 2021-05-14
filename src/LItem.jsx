import React from "react";

export default function LItem(props) {
  return (
    <div>
      <li>
        {props.flag.hour}:{props.flag.minute}:{props.flag.second}:
        {props.flag.millisecond}
      </li>
    </div>
  );
}
