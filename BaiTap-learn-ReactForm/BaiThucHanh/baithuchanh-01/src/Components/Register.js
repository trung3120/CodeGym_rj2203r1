import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Register() {
  const [form, setForm] = useState({});

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    const isValid =
      form.username && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
  }

  return (
    <div className="container mt-5 border border-secondary">
      <div className="p-5">
        <h1>Sign up</h1>
        <form>
          <div className="custom-input">
            <label className="mt-4">Username </label>
            <input
              className="mx-4"
              name="username"
              value={form.username || ""}
              onChange={handleChange}
            />
          </div>
          <div className="custom-input">
            <label className="mt-4">Email </label>
            <input
              className="mx-5"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="custom-input">
            <label className="mt-4">Password </label>
            <input
              className="mx-4"
              type="password"
              name="password"
              value={form.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className="custom-input">
            <label className="mt-4">Confirm password </label>
            <input
              className="mx-4"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword || ""}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-secondary mt-4"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
