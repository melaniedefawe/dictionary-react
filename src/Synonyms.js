import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span>
              Synonyms:<li key={index}> {synonym} </li>
            </span>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
