import React from "react";
import header from "./header.png";
import footer from "./footer.png";
import "./styles.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={header} alt="header" />
        </header>
        <section>
          <h1>Dictionary</h1>
          <Dictionary />
        </section>
        <footer>
          <p className="text-center">
            <a
              href="https://github.com/valhalyria/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source project
            </a>{" "}
            coded by Melanie D.
          </p>
          <img src={footer} alt="footer" />
        </footer>
      </div>
    </div>
  );
}
