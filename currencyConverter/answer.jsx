import React, { useState } from "react";

export default function App() {
  const [toCurrency, setToCurrency] = useState("PKR");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");

  const handleConvert = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const body = await response.json();
    setResult(body.rates[toCurrency] * amount);
  };
  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <form onSubmit={handleConvert}>
        <label>from currency:</label>
        <input
          type="text"
          onChange={(e) => setFromCurrency(e.target.value)}
        ></input>
        <label>to currency:</label>
        <input
          type="text"
          onChange={(e) => setToCurrency(e.target.value)}
        ></input>
        <label>amount</label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button type="submit">submit</button>
        {result}
      </form>
    </div>
  );
}
