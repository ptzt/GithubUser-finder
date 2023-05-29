import SearchIcon from "@/components/icons/SearchIcon";
import React from "react";

const Home = () => {
  return (
    <>
      <form className="flex flex-wrap items-center gap-2 rounded-xl bg-blue-900 p-2">
        <span className="min-w-[20px]">
          <SearchIcon className=" fill-blue-500" />
        </span>
        <input
          type="text"
          placeholder="Search Github username..."
          className="h-14 flex-1 rounded-lg bg-transparent p-2 text-white placeholder-white focus:outline-none focus:outline-blue-500 focus:ring-2"
        />
        <button className="rounded-lg bg-blue-500 px-4 py-4 font-bold text-white">
          Search
        </button>
      </form>
      <article>Todo el resultado</article>
    </>
  );
};

export default Home;
