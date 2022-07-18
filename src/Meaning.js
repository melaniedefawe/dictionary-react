import React from "react";

export default function Meaning(props) {
  return (
    <div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="meanings">
            <p className="meaning">‣ {definition.definition} </p>
            <p className="example">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
