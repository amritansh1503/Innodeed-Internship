import React, { useState } from "react";
import "./common.css";

export default function Mail() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleReset = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      message: "",
    });
  };
  return (
    <div className="mail">
      <h3>Ping Me!</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="mail-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="mail-input"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="message" className="mail-label">
          Message:
        </label>
        <input
          id="message"
          name="message"
          placeholder="Your Message"
          className="mail-textarea"
          value={formData.message}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="mail-button"
          onClick={handleSubmit}
          onKeyPress={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  );
}
