export const ReviewCard = ({ reviewComments, reviewerName, rating }: any) => {
  return (
    <>
      <div className="border border-gray-300 p-4 flex flex-col gap-8">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>{reviewComments}</p>
          <h3 className="font-medium text-purple-800">{rating}/10</h3>
        </div>
        <div className="italic">{reviewerName}</div>
      </div>
    </>
  );
};
