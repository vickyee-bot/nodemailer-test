import express, { Request, Response } from "express";
import dotenv from "dotenv";
import AuthRouter from "../src/routes/Auth";

const app = express();
dotenv.config();
// Middleware setup
app.use(express.json());
app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Express TypeScript Prisma API");
});
app.use("/api/auth", AuthRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on  http://localhost:${process.env.PORT}`);
});

export default app;
