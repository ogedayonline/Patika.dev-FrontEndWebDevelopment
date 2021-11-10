import User from "./components/User";
import "./App.css";
const friends = [
  {
    id: 1,
    name: "Ogeday",
  },
  {
    id: 2,
    name: "Caner",
  },
  {
    id: 3,
    name: "Cihad",
  },
];

function App() {
  return (
    <>
      <User
        name="Ogeday"
        surname="Yalçın"
        // isLogged={true}
        age={23}
        friends={friends}
        adress={{
          title: "Kartal",
          zip: 34881,
        }}
      />
    </>
  );
}

export default App;
