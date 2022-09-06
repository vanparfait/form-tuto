import React, { useReducer, useState } from "react";
import "./App.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const App = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      value: isCheckbox ? event.target.checked : event.target.value,
      name: event.target.name,
    });
  };

  return (
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting && (
        <div>
          Submtting Form:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input onChange={handleChange} name="name" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Apples</p>
            <select name="apple" onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              <option value="fuji">Fuji</option>
              <option value="jonathan">Jonathan</option>
              <option value="honey-crisp">Honey Crisp</option>
            </select>
          </label>
          <label>
            <p>Count</p>
            <input
              type="number"
              name="count"
              onChange={handleChange}
              step="1"
            />
          </label>
          <label>
            <p>Gift Wrap</p>
            <input type="checkbox" name="gift-wrap" onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
