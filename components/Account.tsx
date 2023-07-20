import React from "react";
import AccountStyles from "../styles/components/Account.module.css";

const Account = () => {
  // Account details
  const [account, setAccount] = React.useState<{
    name: string;
    username: string;
  }>({ name: "Name", username: "github.com/username" });

  // Display inputs
  const [displayInputs, setDisplayInputs] = React.useState({
    name: false,
    username: false,
  });

  return (
    <div className={AccountStyles.container}>
      <h1 onClick={() => setDisplayInputs({ ...displayInputs, name: true })}>
        {displayInputs.name ? (
          <input
            autoFocus
            id="name"
            name="name"
            type="text"
            value={account.name}
            className={AccountStyles.input}
            onBlur={() => setDisplayInputs({ ...displayInputs, name: false })}
            onChange={(event) =>
              setAccount({ ...account, name: event.target.value })
            }
          />
        ) : (
          account.name
        )}
      </h1>
      <small
        onClick={() => setDisplayInputs({ ...displayInputs, username: true })}
      >
        {displayInputs.username ? (
          <input
            autoFocus
            type="text"
            id="username"
            name="username"
            value={account.username}
            className={AccountStyles.input}
            onBlur={() =>
              setDisplayInputs({ ...displayInputs, username: false })
            }
            onChange={(event) =>
              setAccount({ ...account, username: event.target.value })
            }
          />
        ) : (
          account.username
        )}
      </small>
    </div>
  );
};

export default Account;
