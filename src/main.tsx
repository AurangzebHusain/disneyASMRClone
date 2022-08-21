import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
