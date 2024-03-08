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
      <h3>Add a new Activity:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the activity: </label>
        <input type="text" id="name" name="name" />
        <div>
          <label htmlFor="checkbox">
            Is it a good-weather-activity? Click:
          </label>
          <input type="checkbox" id="checkbox" name="checkbox" />
        </div>
        <button type="submit">Submit to the list of activities</button>
      </form>
    </>
  );
}
