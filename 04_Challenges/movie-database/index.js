const express = require("express");
const app = express();
const port = 3004;
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];
app.get("/", (req, res) => {
  res.send("OK");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  res.send({ status: 200, message: `${hours}:${minutes}` });
});
app.get("/hello/:ID", (req, res) => {
  const data = req.params.ID;
  res.send({ status: 200, message: "Hello, " + data });
});
app.get("/search?", (req, res) => {
  const search = req.query.s;
  if (search) {
    res.send({
      status: 200,
      message: "ok",
      data: search,
    });
  } else {
    res.status(500).send({
      error: true,
      message: "you have to provide a search",
    });
  }
});
app.get("/movies/add", (req, res) => {
  res.send("OK");
});
app.get("/movies/read", (req, res) => {
  res.send({ status: 200, data: movies });
});
app.get("/movies/read/by-date", (req, res) => {
  res.send({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
});
app.get("/movies/read/by-rating", (req, res) => {
  res.send({ status: 200, data: movies.sort((a, b) => b.rating - a.rating) });
});
app.get("/movies/read/by-title", (req, res) => {
  res.send({
    status: 200,
    data: movies.sort((a, b) => a.title.localeCompare(b.title)),
  });
});

app.get("/movies/read/id/:id", (req, res) => {
  let id = req.params.id;
  //const mov = movies.find(c=>movies[id]===parseInt(id));
  const mov = movies[id - 1];
  if (!mov)
    res.send({
      status: 404,
      error: true,
      message: "the movie id does not exist",
    });
  res.send({ status: 200, data: mov });
});

app.get("/movies/edit", (req, res) => {
  res.send("OK");
});
app.get("/movies/delete", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
