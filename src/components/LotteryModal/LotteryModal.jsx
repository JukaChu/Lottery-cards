import React from "react";
import "./LotteryModal.css";

export function LotteryModal({ coincidence }) {
  return (
    <>
      <div className="lottery-modal">
        <svg
          className="lottery-modal__cross"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </svg>
        <h1>Congratulations!</h1>
        <h2>You guessed right {coincidence} numbers!</h2>
        <h3>If you want to try again, close modal.</h3>
      </div>

      <div className="lottery-modal__overlay"></div>
    </>
  );
}
