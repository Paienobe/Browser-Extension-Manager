import express from "express";

const app = express();

const port = 3008;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome" });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
