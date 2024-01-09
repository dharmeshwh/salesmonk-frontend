import React from "react";
import axios from "axios";

export const AddMovieModal = ({ setShowModal, show, handleGetMovies }: any) => {
  const [movie, setMovie] = React.useState<any>({
    name: "",
    releaseDate: "",
  });

  if (!show) {
    return null;
  }

  const handleAddMovie = async () => {
    try {
      await axios.post("http://localhost:3000/movies", movie);
    } catch (error) {
    } finally {
      handleGetMovies();
      setShowModal(false);
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add new Movie</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <div className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </div>
              </button>
            </div>
            {/*body*/}
            <div
              className="relative p-6"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                width: "30rem",
              }}
            >
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
                name="name"
                onChange={handleChange}
              />

              <input
                type="date"
                name="releaseDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Release Date"
                required
                onChange={handleChange}
              />

              <button
                onClick={handleAddMovie}
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Add new movie
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
