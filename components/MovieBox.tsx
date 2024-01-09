"use client";

import dayjs from "dayjs";

export const MovieBox = ({ name, releasedDate, averageRating }: any) => {
  return (
    <>
      <div
        className=" bg-purple-200 flex flex-col justify-between p-5"
        style={{
          height: "8rem",
        }}
      >
        <p className="text-xl font-semibold">{name}</p>
        <p className="italic">Released: {dayjs(releasedDate).format('D MMMM YYYY')}</p>
        <p className="text-l font-extrabold">Rating: {averageRating}/10</p>
      </div>
    </>
  );
};
