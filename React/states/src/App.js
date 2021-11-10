import { useState } from "react";

function App() {
  const [name, setName] = useState("Ogeday");
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(["Caner", "Cihad"]);
  const [adress, setAdress] = useState({
    title: "istanbul",
    zip: 34800,
  });
  return (
    <div className="App">
      <h1>Merhaba! {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Yalçın")}>Change Name!</button>
      <button onClick={() => setAge(31)}>Change Age!</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}> {friend} </div>
      ))}
      <button onClick={() => setFriends([...friends, "Onur"])}>
        Add New Friend!
      </button>

      <hr />
      <br />

      <h2>Adres</h2>
      <div>
        {adress.title} {adress.zip}
      </div>
      <button
        onClick={() => setAdress({ ...adress, title: "Ankara", zip: 54646 })}
      >
        Add New Adress!
      </button>
    </div>
  );
}

export default App;
