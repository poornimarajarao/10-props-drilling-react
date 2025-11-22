import UserPage from "./UserPage";

function App() {
  const username = "Poornima";

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Drilling Example</h1>
      <UserPage username={username} />
    </div>
  );
}

export default App;
