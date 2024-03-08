export default function List({ activity, isWeather }) {
  console.log(activity);
  return (
    <>
      <h2>The weather is {isWeather.isGoodWeather ? "good" : "bad"}.</h2>

      <ul>
        {activity.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
