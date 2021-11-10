import { useEffect, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Ogeday");

  useEffect(() => {
    console.log("Component Mount Edildi");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Number State Güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("Name State Güncellendi");
  }, [name]);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click!</button>
      <h1>{name}</h1>
      <button onClick={() => setName("Yalçın")}>Click!</button>
    </div>
  );
}

export default Counter;
