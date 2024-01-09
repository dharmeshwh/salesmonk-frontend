export const NoData = ({ text }: any) => {
  return (
    <div className="container mx-auto my-8 space-y-10">
      <div className="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg ">
        <div className="flex flex-col justify-center py-12 items-center">
          <div className="flex justify-center items-center">
            <svg
              className="w-24 h-24 text-purple-500 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 3C4.5313 3 4.12549 3.32553 4.02381 3.78307L2.02381 12.7831C2.00799 12.8543 2 12.927 2 13V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V13C22 12.927 21.992 12.8543 21.9762 12.7831L19.9762 3.78307C19.8745 3.32553 19.4687 3 19 3H5ZM19.7534 12H15C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12H4.24662L5.80217 5H18.1978L19.7534 12Z"></path>
            </svg>
          </div>
          <h1 className="text-gray-700 font-medium text-2xl text-center mb-3">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};
