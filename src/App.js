// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";
// import { useState } from "react";
import { uid } from "uid";
import List from "./components/List.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activity, setActivity] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivity([{ id: uid(), activity: newActivity.name }]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activity={activity} />
    </>
  );
}

export default App;
