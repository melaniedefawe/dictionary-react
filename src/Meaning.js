import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div>
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
