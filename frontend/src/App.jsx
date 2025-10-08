import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div className="main">
        <h1>Practice Project</h1>
        <p>Jokes: {jokes.length}</p>
        {jokes.map((joke, id) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
