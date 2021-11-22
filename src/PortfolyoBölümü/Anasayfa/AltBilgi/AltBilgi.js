import React from "react";
import "./AltBilgi.css";

export default function footer() {
  return (
    /*Alt Bilgi*/
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Anasayfa/shape-bg.png").default}
          alt="Bg"
        />
      </div>
    </div>
  );
}