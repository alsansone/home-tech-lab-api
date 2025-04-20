import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const getChores = async (req: Request, res: Response) => {
  const chores = await prisma.chore.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(chores);
};

// GET /chores
app.get("/api/chores", getChores);

const choreValidationRules = [
  body("title").notEmpty().withMessage("Title is required"),
];

const addChore = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { title, description, assignedTo, completed, dueDate } = req.body;

    const chore = await prisma.chore.create({
      data: {
        title,
        description,
        assignedTo,
        completed: completed ?? false,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      },
    });

    res.status(201).json(chore);
  } catch (error) {
    console.error("Error in /test route:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
};

// POST /chores
app.post("/api/chores", choreValidationRules, addChore);

// Start server after all routes are defined
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
