import { useState } from "react";

const Banner = () => {
  const [banner, showBanner] = useState(true);
  return (
    <>
      {banner ? (
        <div className="py-2 text-sm text-center relative">
          <p>
            Made with{" "}
            <a className="font-bold" href="https://nextjs.org/">
              Next JS
            </a>
            ,{" "}
            <a className="font-bold" href="https://tailwindcss.com/">
              Tailwind CSS
            </a>{" "}
            &
            <a className="font-bold" href="https://developers.themoviedb.org/3">
              The Movie Database (TMDB) API
            </a>{" "}
            by{" "}
            <a
              className="font-bold underline underline-offset-2"
              href="https://sreerajsree.vercel.app/"
            >
              Sreeraj S
            </a>
          </p>
          <button onClick={() => showBanner(false)} className="py-1 px-2 border rounded absolute top-1 right-8">
            x
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
