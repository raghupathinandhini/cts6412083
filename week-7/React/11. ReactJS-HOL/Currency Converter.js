import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const conversionRate = 0.011; // Example: 1 INR = 0.011 EUR
    const result = parseFloat(rupees) * conversionRate;
    setEuros(result.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter (INR ➜ EUR)</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert</button>

      {euros && (
        <p>
          {rupees} INR = {euros} EUR
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
