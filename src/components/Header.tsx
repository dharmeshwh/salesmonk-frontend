export const Header = ({ setOpenAddMovie, setOpenAddReview }: any) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          columnGap: "1rem",
        }}
        className="bg-gray-200"
      >
        <h4 className="text-black">MOVIECRITIC</h4>
        <div
          style={{
            display: "flex",
            columnGap: "1rem",
          }}
        >
          <button
            onClick={() => {
              setOpenAddReview(true);
            }}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Add new review
          </button>
          <button
            onClick={() => {
              setOpenAddMovie(true);
            }}
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Add new movie
          </button>
        </div>
      </div>
    </>
  );
};
