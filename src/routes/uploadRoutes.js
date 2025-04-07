import express from "express";
import upload from "../middleware/upload.js";
const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json({
    message: "Imagen subida con éxito",
    imageUrl: req.file.path, // Esta es la URL en Cloudinary
  });
});

export default router;
