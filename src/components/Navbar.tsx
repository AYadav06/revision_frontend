import { useAuth } from "../hooks/AuthContext";


export default function Navbar() {
  const { user,login, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <span>Please log in below.</span>
      )}
    </nav>
  );
}
 export function LoginButton() {
  const { login } = useAuth();
  return <button onClick={() => login('Alice')}>Log In as Alice</button>;
}