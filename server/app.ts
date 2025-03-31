import express from "express";
import "express-async-errors";
import extensionsRoute from "./routes/extensions";
import { connectDB } from "./db/connect";
import dotenv from "dotenv";
import notFound from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.static("./public"));

// routes
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome" });
});
app.use("/api/v1/extension", extensionsRoute);

// errors middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
