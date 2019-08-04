import React from "react";
import "./CardLottery.css";

export function CardLottery({
  onNumberClickHandler,
  numbers,
  Number,
  index,
  lotteryResult
}) {
  return (
    <div
      className={
        Number[index].length !== 5
          ? "card-lottery card-lottery--invalid"
          : "card-lottery"
      }
    >
      {numbers.map((number, key) => {
        return (
          <button
            title={number}
            className={
              lotteryResult[index].indexOf(number) === -1
                ? "card-lottery__number"
                : "card-lottery__number card-lottery__number--win"
            }
            key={key + index}
            onClick={e => {
              onNumberClickHandler(number, index, e);
            }}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}
