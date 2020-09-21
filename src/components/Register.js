import React, { useState, useEffect } from "react";

export default function Register() {
  return (
    <form className="register-container">
      <h2>Sign Up</h2>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" />
      </label>
    </form>
  );
}
