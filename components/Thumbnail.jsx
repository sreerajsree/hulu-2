import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        height={1080}
        width={1920}
        alt="thumbnail"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title || result.name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 uppercase">
          {result.media_type && `${result.media_type}`}
          {result.media_type ? (<span className="font-bold text-2xl mb-2 mx-2">.</span>) : null}
          {result.release_date || result.first_air_date}{" "}
          <span className="font-bold text-2xl mb-2 ml-2">.</span>
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
