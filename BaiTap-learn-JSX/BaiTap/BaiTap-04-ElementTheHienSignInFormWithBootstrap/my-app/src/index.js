import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img
          className="mb-4"
          src="https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg"
          width="72"
          height="72"
        />
        <h1 className="h3 mn-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control password"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2018-2022</p>
      </form>
    </div>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
