import React from "react";

export default function Meaning(props) {
  return (
    <div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="meaning">
              ‣ {definition.definition}{" "}
              <span className="part-of-speech">
                ({props.meaning.partOfSpeech})
              </span>
            </p>
            <p className="example">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
