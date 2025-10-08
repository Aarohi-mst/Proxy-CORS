import express from "express"; //module JS
const app = express();
const port = 3000;
const jokes = [
  {
    id: 1,
    title: "Joke 1",
    description: "First joke",
  },
  {
    id: 2,
    title: "Joke 2",
    description: "Second joke",
  },
  {
    id: 3,
    title: "Joke 3",
    description: "Third joke",
  },
  {
    id: 4,
    title: "Joke 4",
    description: "Fourth joke",
  },
  {
    id: 5,
    title: "Joke 5",
    description: "Fifth joke",
  },
];
app.get("/", (req, res) => {
  res.send("Hey there!");
});
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});
app.listen(port, () => {
  console.log("Running on port ");
});
