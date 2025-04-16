# 🧪 Home Tech Lab – API

This is the backend API for the Home Tech Lab project. It's built using **Node.js**, **Express**, **TypeScript**, and **Prisma ORM** with a **SQLite** database for local development.

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/index.html)

## 📦 Project Structure

```
home-tech-lab-api/
├── prisma/
│   ├── schema.prisma     # DB schema
│   └── dev.db            # Local SQLite DB (ignored from Git)
├── src/
│   └── index.ts          # Entry point (Express server)
├── .env                  # Environment config (ignored from Git)
└── README.md
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment

Create a `.env` file in the root with:

```
DATABASE_URL="file:./dev.db"
```

### 3. Run Prisma migrations

```bash
npx prisma migrate dev --name init
```

(Optional: Seed the database with sample data)

### 4. Start the dev server

```bash
npm run dev
```

Visit the API at: [http://localhost:4000/chores](http://localhost:4000/chores)

---

## 📘 API Routes

### `GET /chores`

Returns a list of all chores from the database.

More routes coming soon:

- `POST /chores` — create a new chore
- `PATCH /chores/:id` — update chore status or details
- `DELETE /chores/:id` — delete a chore

---

## 🧪 Prisma Tips

- Regenerate client if schema changes:

```bash
npx prisma generate
```

- Reset database and rerun all migrations:

```bash
npx prisma migrate reset
```

---

## 💡 Future Features

- Authentication & users
- Filtering & sorting
- Repeatable chores
- Mobile companion support
- Additional project APIs (beyond chores)

---

Built with 💻 by [you].
