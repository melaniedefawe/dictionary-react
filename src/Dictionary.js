import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setWord] = useState();
  let [result, setResult] = useState();
  let [photos, setPhotos] = useState();

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000018e0dfacc45534e809b331eb3f4a03044";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
      <Photos photos={photos} />
    </div>
  );
}
