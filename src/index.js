import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./dbConfig.js";
import dogRoutes from "./routes/dogRoutes.js";
dotenv.config();
dbConnection();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Bienvenido al Backend de BP");
});
app.use("/api/dogs", dogRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
