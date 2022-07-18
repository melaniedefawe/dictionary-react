import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";

export default function Dictionary() {
  let [word, setWord] = useState();
  let [result, setResult] = useState();

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  return (
    <div>
      <form onSubmit={search} className="mb-5">
        <input
          type="search"
          autoFocus={true}
          placeholder="Search for a word..."
          onChange={handleChange}
          className="form-control form-control-lg"
        />
      </form>
      <Definition data={result} />
    </div>
  );
}
