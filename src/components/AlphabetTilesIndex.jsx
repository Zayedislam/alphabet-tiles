import React, { useState } from "react";

const AlphabetTilesIndex = () => {
  const [output, setOutput] = useState("");

  const handleClick = (letter) => {
    let newOutput = output + letter;
    newOutput = newOutput.replace(/(.)\1{2,}/g, "_");
    setOutput(newOutput);
  };

  const tilesRender = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.split("").map((letter) => (
      <button key={letter} onClick={() => handleClick(letter)}>
        {letter}
      </button>
    ));
  };

  return (
    <div>
      <div className='tiles-container'>{tilesRender()}</div>
      <div>
        <h3>Output </h3>
      </div>
      <div id='outputString'>{output}</div>
    </div>
  );
};

export default AlphabetTilesIndex;
