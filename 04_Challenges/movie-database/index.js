const express = require("express");
const app = express();
const port = 3001;

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
    const data= req.params.ID;
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
