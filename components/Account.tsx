/**
 * Snippet owner info
 */

import React from "react";
import "../styles/components/account.css";

const Account = () => {
  const [account, setAccount] = React.useState<{
    name: string;
    username: string;
  }>({ name: "Name", username: "github.com/username" });

  return (
    <div className={"account-container"}>
      <h1>
        <input
          type="text"
          value={account.name}
          className={"account-input"}
          onChange={(event) =>
            setAccount({ ...account, name: event.target.value })
          }
        />
      </h1>
      <small>
        <input
          type="text"
          value={account.username}
          className={"account-input"}
          onChange={(event) =>
            setAccount({ ...account, username: event.target.value })
          }
        />
      </small>
    </div>
  );
};

export default Account;
