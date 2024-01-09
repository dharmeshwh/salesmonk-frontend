export const ReviewCard = () => {
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
          <p>This was the best movie</p>
          <h3 className="font-medium text-purple-800">9/10</h3>
        </div>
        <div className="italic">Dharmesh Yadav</div>
      </div>
    </>
  );
};
