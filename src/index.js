import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./dbConfig.js";
import dogRoutes from "./routes/dogRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();
dbConnection();
const app = express();
const corsOptions = {
  origin: "http://localhost:5173", // Asegúrate de que esta URL sea la de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Bienvenido al Backend de BP");
});
app.use("/api/dogs", dogRoutes);
app.use("/api", uploadRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
