/**
 * Snippet owner info
 */

import React from "react";
import Styles from "../styles/components/Account.module.css";

const Account = () => {
  // Account details
  const [account, setAccount] = React.useState<{
    name: string;
    username: string;
  }>({ name: "Name", username: "github.com/username" });

  return (
    <div className={Styles.container}>
      <h1>
        <input
          type="text"
          value={account.name}
          className={Styles.input}
          onChange={(event) =>
            setAccount({ ...account, name: event.target.value })
          }
        />
      </h1>
      <small>
        <input
          type="text"
          id="username"
          name="username"
          value={account.username}
          className={Styles.input}
          onChange={(event) =>
            setAccount({ ...account, username: event.target.value })
          }
        />
      </small>
    </div>
  );
};

export default Account;
