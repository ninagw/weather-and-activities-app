// import { useState } from "react";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    // const [goodWeather, setGoodWeather] = useState(false);

    const formElements = event.target.elements;
    const name = formElements.name.value;
    const isForGoodWeather = formElements.checkbox.checked;

    // const newActivity = {}
    onAddActivity(name, isForGoodWeather);

    // setActivity(formElements.name.value);
    // setGoodWeather(formElements.checkbox.checked);

    event.target.reset();
    formElements.name.focus();
  }

  return (
    <>
      <h1>Add new Activity:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="checkbox">Good-weather activity:</label>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
