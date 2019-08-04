import React, { useState } from "react";
import "./InteractiveMenu.css";
import { Container } from "../Container/Container";
import { CardLottery } from "../CardLottery/CardLottery";
import { LotteryModal } from "../LotteryModal/LotteryModal";

export function InteractiveMenu(props) {
  const [lotteryResult, changeResult] = useState([[], [], [], [], []]);
  const [Number, addNumber] = useState([[], [], [], [], []]);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [Coincidence, setCoincidence] = useState(0);
  const [selectButton, changeSelectButton] = useState(true);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal(event) {
    if (
      event.target.closest(".lottery-modal__cross") ||
      event.target.closest(".lottery-modal__overlay")
    ) {
      setModalOpen(false);
    }
  }

  document.addEventListener("click", closeModal);

  let finalLotteryResult = [];

  let buttonNumbers = [];
  for (let i = 1; i < 21; i++) {
    buttonNumbers.push(i);
  }

  function isEveryLengthGood(array) {
    return array.length === 5;
  }

  let isArraysValid = Number.every(isEveryLengthGood);

  function onNumberClickHandler(number, index, e) {
    e.target.classList.toggle("card-lottery__number--choose");
    if (Number[index].indexOf(number) === -1) {
      let NumberState = [...Number];
      NumberState[index].push(number);
      addNumber(NumberState);
      if (Number[index].length === 5) {
        props.setAll(Number);
      }
    } else {
      let NumberState = [...Number];
      let indexN = NumberState[index].indexOf(number);
      NumberState[index].splice(indexN, 1);
      addNumber([...NumberState]);
    }
  }

  function onTryAgainClick() {
    addNumber([[], [], [], [], []]);
    finalLotteryResult = [];
    changeResult([[], [], [], [], []]);
    [...document.querySelectorAll(".card-lottery__number--choose")].forEach(
      but => {
        but.classList.remove("card-lottery__number--choose");
      }
    );
    changeSelectButton(!selectButton);
  }

  function onSubmitButtonClick() {
    let promise = new Promise(function(resolve, reject) {
      openModal();
      let coincidence = 0;

      function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      for (let j = 0; j < 5; j++) {
        let result = [];
        for (let i = 1; i < 100; i++) {
          let b = randomIntFromInterval(1, 20);
          if (result.indexOf(b) === -1) {
            if (result.length === 5) {
              finalLotteryResult[j] = result;
              changeResult(finalLotteryResult);

              for (let i = 0; i < finalLotteryResult[j].length; i++) {
                if (
                  props.allNumbers[j].indexOf(finalLotteryResult[j][i]) !== -1
                ) {
                  coincidence++;
                }
              }
              setCoincidence(coincidence);
              changeSelectButton(!selectButton);
              break;
            } else {
              result.push(b);
            }
          }
        }
      }
      resolve(coincidence);
    });
  }

  return (
    <>
      <div className="interactive-menu">
        <Container>
          <div className="interactive-menu__cards">
            {Number.map((i, key) => {
              let indexOfArray = Number.indexOf(i);
              return (
                <CardLottery
                  numbers={buttonNumbers}
                  onNumberClickHandler={onNumberClickHandler}
                  Number={Number}
                  index={indexOfArray}
                  lotteryResult={lotteryResult}
                  key={key}
                />
              );
            })}
          </div>
          <div className="interactive-menu__container">
            <h1>
              {!isArraysValid
                ? "U need to choose 5 numbers on each card!"
                : "U can try your luck"}
            </h1>
            {selectButton ? (
              <button
                className={
                  isArraysValid
                    ? "interactive-menu__lottery-button interactive-menu__lottery-button--valid"
                    : "interactive-menu__lottery-button"
                }
                disabled={isArraysValid ? false : true}
                onClick={() => onSubmitButtonClick()}
              >
                Try your luck
              </button>
            ) : (
              <button
                className="interactive-menu__lottery-button"
                onClick={() => {
                  onTryAgainClick();
                }}
              >
                Play again?
              </button>
            )}
          </div>

          {modalIsOpen && <LotteryModal coincidence={Coincidence} />}
        </Container>
      </div>
    </>
  );
}
