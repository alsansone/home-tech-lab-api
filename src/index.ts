import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/chores", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Do the dishes",
      assignedTo: "Adam",
      completed: false,
    },
    {
      id: "2",
      title: "Vacuum living room",
      assignedTo: "Ariel",
      completed: true,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});