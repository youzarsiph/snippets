import React from "react";

const Account = (props: { name: string; username: string }) => (
  <div className="absolute bottom-0 left-0 rounded-tr-xl bg-white/80 px-4 py-2 ring-1 ring-white dark:bg-slate-800/75 dark:text-slate-200 dark:ring-slate-900">
    <div className="relative flex items-center gap-6">
      <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

      <h1 className="flex items-center gap-4">
        <svg
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="bi bi-person-circle"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>

        <span>{props.name}</span>
      </h1>

      <small>{props.username}</small>
    </div>
  </div>
);

export default Account;
