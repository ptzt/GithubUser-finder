import React from "react";
import GithubOctocat from "@/components/icons/GithubOctocat";

const UserCardInfo = () => {
  return (
    <article className="grid-areas grid rounded-xl bg-blue-900 p-2 text-white">
      <div className="section-logo grid h-20 w-20 place-content-center rounded-full bg-gray-200 p-1 ">
        <GithubOctocat className="relative top-2 h-full w-full" />
      </div>
      <div className="section-title">
        <h2>The Octocat</h2>
        <p>@octocat</p>
      </div>
      <p className="section-data">Joined 25 Jan 2011</p>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        laboriosam vel ad praesentium repellendus id blanditiis autem nihil
        voluptates dolores eligendi possimus, earum delectus corrupti iure.
        Provident, dicta maiores? Esse?
      </p>
      <div className="section-number flex justify-around rounded-lg bg-blue-950">
        <article>
          <p>Repos</p>
          <p>8</p>
        </article>
        <article>
          <p>Followers</p>
          <p>3000</p>
        </article>
        <article>
          <p>Following</p>
          <p>9</p>
        </article>
      </div>
      <div className="section-social md:grid md:grid-cols-2">
        <article>
          <i>Icono</i>
          <p>San fracisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>San fracisco</p>
        </article>
        <article>
          <i>Icono</i>
          <p>Twitter</p>
        </article>
        <article>
          <i>Icono</i>
          <p>@github</p>
        </article>
      </div>
    </article>
  );
};

export default UserCardInfo;
