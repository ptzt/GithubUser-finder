"use client";
import FormSearchUser from "@/components/FormSearchUser";
import UserCardInfo from "@/components/UserCardInfo";
import React, { useState } from "react";
import { User } from "@/interfaces/user";

const Home = () => {
  const [user, setUser] = useState<User | null>();

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    setUser(await res.json());
  };

  return (
    <>
      <FormSearchUser getUser={getUser} />
      {user && <UserCardInfo user={user} />}
    </>
  );
};

export default Home;
