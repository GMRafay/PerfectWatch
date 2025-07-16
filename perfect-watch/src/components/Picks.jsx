export default function Picks({ picks }) {
  return (
    <div>
      {picks.map((pick) => (
        <p>{pick}</p>
      ))}
    </div>
  );
}
