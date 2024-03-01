export default function List({ activity }) {
  return (
    <>
      <ul>
        {activity.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
