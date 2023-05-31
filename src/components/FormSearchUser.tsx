"use client";
import React from "react";
import SearchIcon from "@/components/icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({ getUser }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value.trim();
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-wrap items-center gap-2 rounded-xl bg-white p-4 shadow-md dark:bg-blue-900 dark:shadow-none"
    >
      <input
        name="username"
        type="text"
        placeholder="Search Github username..."
        className="h-14 flex-1 rounded-lg bg-transparent p-2 focus:outline-none focus:outline-blue-500 focus:ring-2 dark:text-white dark:placeholder-white"
      />
      <button className="rounded-lg bg-sky-500 px-4 py-4 font-bold text-white">
        Search
      </button>
    </form>
  );
};

export default FormSearchUser;
