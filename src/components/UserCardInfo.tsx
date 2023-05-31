import React from "react";
import GithubOctocat from "@/components/icons/GithubOctocat";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";

const UserCardInfo = () => {
  return (
    <article className="grid-areas grid rounded-xl bg-blue-900 p-2 text-white">
      <div className="section-logo grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 ">
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
      <div className="section-social mt-4 md:grid md:grid-cols-2">
        <article>
          <i>
            <LocationIcon className="fill-white" />
          </i>
          <p>San fracisco</p>
        </article>
        <article>
          <i>
            <LinkIcon className="fill-white" />
          </i>
          <p>Link</p>
        </article>
        <article>
          <i>
            <TwitterIcon className="fill-white" />
          </i>
          <p>Twitter</p>
        </article>
        <article>
          <i>
            <BuildingIcon className="fill-white" />
          </i>
          <p>@github</p>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
