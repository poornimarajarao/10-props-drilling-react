import UserDetails from "./UserDetails";

function UserCard({ username }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
      <h3>User Card</h3>
      {/* Passing username again even though UserCard does NOT use it */}
      <UserDetails username={username} />
    </div>
  );
}

export default UserCard;
