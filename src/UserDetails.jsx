function UserDetails({ username }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "10px", marginTop: "10px" }}>
      <p><strong>User Details Component</strong></p>
      <p>Hello, {username}</p>
    </div>
  );
}

export default UserDetails;
