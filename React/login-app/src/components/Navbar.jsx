import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function LoggedoutLinks({ classname }) {
  return (
    <>
      <li>
        <a href="/" className={classname}>
          Home
        </a>
      </li>
      <li>
        <a href="/login" className={classname}>
          Login
        </a>
      </li>
    </>
  );
}

function LoggedinLinks({ classname }) {
  return (
    <>
      <li>
        <a href="/" className={classname}>
          Home
        </a>
      </li>
      <li>
        <a href="/profile" className={classname}>
          Profile
        </a>
      </li>
      <li>
        <a href="/dashboard" className={classname}>
          Dashboard
        </a>
      </li>
      <li>
        <a href="/login" className={classname}>
          Logout
        </a>
      </li>
    </>
  );
}

export default function Navbar() {
  const token = useContext(AuthContext).token;

  return (
    <nav>
      <ul>
        {token ? (
          <LoggedinLinks classname={"underline"} />
        ) : (
          <LoggedoutLinks classname={"underline"} />
        )}
      </ul>
    </nav>
  );
}
