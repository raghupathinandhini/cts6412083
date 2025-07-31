import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Student Details:</h1>
      <p><b className="label name">Name:</b> <span className="value name">Steeve</span></p>
      <p><b className="label school">School:</b> <span className="value school">DNV Public School</span></p>
      <p><b className="label total">Total:</b> <span className="value total">284 Marks</span></p>
      <p><b className="label score">Score:</b> <span className="value score">94.67%</span></p>
    </div>
  );
}
