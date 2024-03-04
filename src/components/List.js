export default function List({ activity, isWeather }) {
  return (
    <>
      <h2>The weather is: {isWeather.isGoodWeather ? "good" : "bad"}</h2>
      <ul>
        {activity.map(({ id, name, isForGoodWeather }) => (
          <li key={id}>
            {name} {isForGoodWeather ? "good" : "bad"}
          </li>
        ))}
      </ul>
    </>
  );
}
