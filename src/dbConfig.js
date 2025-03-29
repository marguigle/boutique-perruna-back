import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error en la conexión: ${error.message}`);
    process.exit(1);
  }
};
export default dbConnection;
