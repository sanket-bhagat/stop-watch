import React from "react";

export default function Footer(props) {
  return (
    <div className="footer">
      <p className="footer-text">©Sanket Bhagat({props.year})</p>
    </div>
  );
}
