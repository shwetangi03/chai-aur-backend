import express from "express";

const app = express();
app.use(express.static("dist"))

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first joke",
      content: "This is a contetnt for first joke",
    },
    {
      id: 2,
      title: "second joke",
      content: "This is a contetnt for second joke",
    },
    {
      id: 3,
      title: "third joke",
      content: "This is a contetnt for third joke",
    },
    {
      id: 4,
      title: "fourth joke",
      content: "This is a contetnt for fourth joke",
    },
    {
      id: 5,
      title: "fifth joke",
      content: "This is a contetnt for fifth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
