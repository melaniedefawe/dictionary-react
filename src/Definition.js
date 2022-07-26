import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";

export default function Definition(props) {
  if (props.data) {
    return (
      <div>
        <section className="phonetics">
          <h3>{props.data.word}</h3>{" "}
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetic phonetic={phonetic} />
              </span>
            );
          })}
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <div className="part-of-speech">{meaning.partOfSpeech}</div>
              <Meaning meaning={meaning} />{" "}
              <Synonyms synonyms={meaning.synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
