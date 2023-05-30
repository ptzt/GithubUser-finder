import React from "react";
import GithubOctocat from "./icons/githubOctocat";

const UserCardInfo = () => {
  return (
    <article className="rounded-xl bg-blue-900 p-2 text-white">
      <div className=" grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 ">
        <GithubOctocat className="relative top-2 h-full w-full" />
      </div>
    </article>
  );
};

export default UserCardInfo;
