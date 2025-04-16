import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// GET /chores
app.get("/chores", async (req, res) => {
  const chores = await prisma.chore.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(chores);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
