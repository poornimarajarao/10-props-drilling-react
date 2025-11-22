import UserCard from "./UserCard";

function UserPage({ username }) {
  return (
    <div style={{ border: "1px solid #aaa", padding: "10px", marginTop: "10px" }}>
      <h2>User Page</h2>
      {/* Passing username even though UserPage does NOT use it */}
      <UserCard username={username} />
    </div>
  );
}

export default UserPage;
