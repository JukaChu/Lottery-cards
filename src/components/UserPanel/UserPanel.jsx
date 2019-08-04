import React from "react";
import "./UserPanel.css";
import basket from "./basket.svg";

export function UserPanel() {
  return (
    <>
      <div className="user-panel">
        <button className="user-panel__sign-in">Sign In</button>
        <button className="user-panel__registration">Sign Up</button>
        <button className="user-panel__basket">
          <img src={basket} alt="basket" />
        </button>
      </div>
    </>
  );
}
