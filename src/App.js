// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activity, setActivity] = useState("");

  function handleAddActivity(newActivity) {
    setActivity([
      ...activity,
      { id: uid(), activity: { activity }, checkbox: {} },
    ]);
  }

  return;
  <Form onAddActivity={handleAddActivity} />;
}

export default App;
