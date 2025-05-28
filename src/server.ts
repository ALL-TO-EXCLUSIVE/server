import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes"
import villageRoutes from "./routes/villageRoutes";
import familiesRouter from "./routes/familyRoutes";
import membersRouter from "./routes/memberRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ["https://parejiyaparivar.org", "http://localhost:8080", "http://localhost:3000"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/villages", villageRoutes);
app.use("/api/families", familiesRouter);
app.use("/api/members", membersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
