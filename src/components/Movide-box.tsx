export const MovieBox = ({ name, date, rating }: any) => {
  return (
    <div
      className="text-black bg-purple-200"
      style={{
        width: "23rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <h2>{name}</h2>
      <p>Released: {date}</p>
      <strong>Rating: {rating}/10</strong>
    </div>
  );
};
