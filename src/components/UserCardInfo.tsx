import React from "react";
import GithubOctocat from "@/components/icons/GithubOctocat";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";

const UserCardInfo = () => {
  return (
    <article className="grid-areas grid rounded-xl bg-blue-900 p-4 text-white">
      <div className="section-logo mr-3 grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 lg:mx-auto ">
        <GithubOctocat className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">The Octocat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-data lg:text-right">Joined 25 Jan 2011</p>
      <p className="section-description mt-8 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        laboriosam vel ad praesentium repellendus id
      </p>
      <div className="section-number mt-4 flex justify-around rounded-xl bg-blue-950 p-6 text-center">
        <article>
          <p>Repos</p>
          <p className="text-xl font-bold">8</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="text-xl font-bold">3000</p>
        </article>
        <article>
          <p>Following</p>
          <p className="text-xl font-bold">9</p>
        </article>
      </div>
      <div className="section-social mt-4 space-y-2 md:grid md:grid-cols-2">
        <article className="flex space-x-3">
          <i>
            <LocationIcon
              className="h-full w-full fill-white md:w-6"
              width={"1rem"}
            />
          </i>
          <p>San fracisco</p>
        </article>
        <article className="flex space-x-3">
          <i>
            <LinkIcon className="h-full w-full fill-white" width={"1rem"} />
          </i>
          <a href="">ptzt.site</a>
        </article>
        <article className="flex space-x-3">
          <i>
            <TwitterIcon className="h-full w-full fill-white" width={"1rem"} />
          </i>
          <a href="">Twitter</a>
        </article>
        <article className="flex space-x-3">
          <i>
            <BuildingIcon className="h-full w-full fill-white" width={"1rem"} />
          </i>
          <a href="">@github</a>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
