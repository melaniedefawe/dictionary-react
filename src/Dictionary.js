import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [word, setWord] = useState();

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search for a word..."
          onChange={handleChange}
          className="form-control form-control-lg"
        />
      </form>
      <p>{word}</p>
    </div>
  );
}
