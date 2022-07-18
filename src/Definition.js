import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";

export default function Definition(props) {
  if (props.data) {
    return (
      <div>
        <div className="phonetics component-container">
          <h3>{props.data.word}</h3>{" "}
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </div>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="component-container">
              <div className="part-of-speech">{meaning.partOfSpeech}</div>
              <Meaning meaning={meaning} />{" "}
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
