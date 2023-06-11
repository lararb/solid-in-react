import React, {useState} from "react";
import "./App.css";

export const App = () => {
  const [name, setName] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [email, setEmail] = useState<string>();
  const [fruit, setFruit] = useState<string>();

  const submitForm = () =>
    alert(`Hello ${name}! We've got your information, we love ${fruit} too!`);

  return (
    <div className="container">
      <h1>My SOLID App</h1>
      <form onSubmit={submitForm} className="form">
        <label className="label">
          Your name:
          <input
            className="input"
            name="userName"
            type="text"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            required
          />
        </label>
        <label className="label">
          Your e-mail:
          <input
            className="input"
            name="userEmail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </label>
        <label className="label">
          Choose your favourite fruit:
          <select
            className="input"
            name="userFruit"
            value={fruit}
            onChange={(event) => setFruit(event.currentTarget.value)}
            required
          >
            <option value="orange">Orange</option>
            <option value="lemon">Lemon</option>
            <option value="cherry">Cherry</option>
            <option value="banana">Banana</option>
          </select>
        </label>

        <label className="label">
          Amount of fruits:
          <input
            className="input"
            name="userPhone"
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.currentTarget.value))}
          />
        </label>
        <button className="button" type="submit" disabled={!name}>
          Done!
        </button>
      </form>
    </div>
  );
};
