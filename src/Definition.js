import React from "react";
import Meaning from "./Meaning";

export default function Definition(props) {
  if (props.data) {
    return (
      <div className="definition">
        {" "}
        <h3>Definition of {props.data.word}:</h3>{" "}
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
