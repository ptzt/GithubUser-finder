import React from "react";
import GithubOctocat from "@/components/icons/GithubOctocat";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import { User } from "@/interfaces/user";
import Image from "next/image";

interface Props {
  user: User;
}

function validateURL(url: string) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la URL
    url = "https://" + url;
  }
  return url;
}

const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="grid-areas grid rounded-xl bg-blue-900 p-4 text-white">
      <div className="section-logo mr-3 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-gray-200 p-1 lg:mx-auto ">
        <Image
          src={user.avatar_url}
          width={96}
          height={96}
          alt={`profile image user ${user.name}`}
          className="rounded-full"
        />
        {/* <GithubOctocat className="relative top-2 h-full w-full" /> */}
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p>@{user.login}</p>
      </div>
      <p className="section-data lg:text-right">
        Joined on{" "}
        {new Date(user.created_at || "").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="section-description mt-8 leading-relaxed">
        {user.bio || "No bio found"}
      </p>
      <div className="section-number mt-4 flex justify-around rounded-xl bg-blue-950 p-6 text-center">
        <article>
          <p>Repos</p>
          <p className="text-xl font-bold">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="text-xl font-bold">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="text-xl font-bold">{user.following}</p>
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
          <span>{user.location || "No location found"}</span>
        </article>
        <article className="flex space-x-3">
          <i>
            <LinkIcon className="h-full w-full fill-white" width={"1rem"} />
          </i>
          <a href={validateURL(user.blog)} className="truncate" target="_blank">
            {user.blog || "No blog found"}{" "}
          </a>
        </article>
        <article className="flex space-x-3">
          <i>
            <TwitterIcon className="h-full w-full fill-white" width={"1rem"} />
          </i>
          <a
            href={`https://twitter.com/${user.twitter_username}`}
            target="_blank"
          >
            {user.twitter_username || "No twitter found"}
          </a>
        </article>
        <article className="flex space-x-3">
          <i>
            <BuildingIcon className="h-full w-full fill-white" width={"1rem"} />
          </i>
          <span>{user.company || "No company found"}</span>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
