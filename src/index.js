import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";

import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import User from "./pages/User";
import Error from "./pages/Error";
import ModifyTask from "./pages/ModifyTask";

import reportWebVitals from "./reportWebVitals";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/" element={<User />} />
            <Route path="/task/:id" element={<ModifyTask />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
