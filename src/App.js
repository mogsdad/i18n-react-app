import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactMarkdown>{t("editAndSaveToReload")}</ReactMarkdown>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{t("learnReact")}</span>
        </a>
      </header>
    </div>
  );
}

export default App;
