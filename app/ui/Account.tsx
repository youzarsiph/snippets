import clsx from "clsx";
import React from "react";

const Account = (props: { name: string; username: string }) => (
  <div className="absolute bottom-0 left-0 rounded-tr-xl bg-white/80 px-4 py-2 ring-1 ring-white dark:bg-slate-800/75 dark:text-slate-200 dark:ring-slate-900">
    <div className="relative flex items-center gap-6">
      <div className="absolute inset-0 -z-10 rounded-3xl backdrop-blur-3xl"></div>

      <h1 className="flex items-center gap-4">
        <i className="bi bi-person-circle text-xl" />
        <span>{props.name}</span>
      </h1>

      <small className="flex items-center gap-4">
        <i
          className={clsx("bi text-xl", {
            "bi-github": props.username.includes("github"),
            "bi-gitlab": props.username.includes("gitlab"),
            "bi-facebook": props.username.includes("facebook"),
            "bi-twitter": props.username.includes("twitter"),
            "bi-instagram": props.username.includes("instagram"),
            "bi-linkedin": props.username.includes("linkedin"),
            "bi-youtube": props.username.includes("youtube"),
          })}
        />
        <span>{props.username}</span>
      </small>
    </div>
  </div>
);

export default Account;
