// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";
import { useEffect, useState } from "react";
import { uid } from "uid";
import List from "./components/List.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activity, setActivity] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  const [isWeather, setIsWeather] = useState([]);

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const isWeather = await response.json();
      console.log(isWeather);
      setIsWeather(isWeather);
    }
    startFetching();
  }, []);

  const filteredActivities = activity.filter(
    (activity) => activity.isForGoodWeather === isWeather.isGoodWeather
  );

  function handleAddActivity(name, isForGoodWeather) {
    setActivity([
      ...activity,
      { id: uid(), name: name, isForGoodWeather: isForGoodWeather },
    ]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activity={filteredActivities} isWeather={isWeather} />
    </>
  );
}

export default App;
