import React, { useState } from "react";
import "./ChooseCity.css";

export function ChooseCity() {
  const cityList = ["Kyiv", "Kharkiv", "Lviv"];
  const [dropdown, onClickDropdown] = useState(false);
  const [city, chooseCity] = useState("Choose your city");

  function onHandlerClickDropdown(event) {
    if (
      event.target.closest(".choose-city__button-selector") ||
      event.target.closest(".choose-city__list")
    ) {
      return;
    } else {
      onClickDropdown(false);
    }
  }

  document.addEventListener("click", onHandlerClickDropdown);
  return (
    <>
      <div className="choose-city__dropdown">
        <div
          className="choose-city__button-selector"
          onClick={() => {
            onClickDropdown(!dropdown);
          }}
        >
          {city}
        </div>

        <ul
          className={
            dropdown === true
              ? "choose-city__list choose-city__list--visible"
              : "choose-city__list"
          }
        >
          {cityList.map(city => {
            return (
              <li
                key={city}
                onClick={() => {
                  chooseCity(city);
                }}
              >
                {city}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
