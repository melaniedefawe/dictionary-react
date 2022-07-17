import React from "react";

export default function Definition(props) {
  if (props.data) {
    return (
      <div className="definition">
        {" "}
        <h3>Definition:</h3> {props.data.meanings[0].definitions[0].definition}
      </div>
    );
  } else {
    return null;
  }
}
