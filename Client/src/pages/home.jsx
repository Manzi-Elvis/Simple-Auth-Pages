export default function Home() {
  const user = localStorage.getItem("token");
  return (
    <div>
      <h2>Welcome Home</h2>
      {user ? <p>You are logged in!</p> : <p>Please login first.</p>}
    </div>
  );
}
