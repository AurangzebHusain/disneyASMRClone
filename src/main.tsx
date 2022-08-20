import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/a" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
