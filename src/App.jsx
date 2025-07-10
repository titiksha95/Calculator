import styles from "./App.module.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newCalValue = calValue + buttonText;
      setCalValue(newCalValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display calValue={calValue} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
