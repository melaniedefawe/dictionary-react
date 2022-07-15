import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState();

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
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
