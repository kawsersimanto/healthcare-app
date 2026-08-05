import express, {
  json,
  urlencoded,
  type Express,
  type Request,
  type Response,
} from "express";
import { prisma } from "./app/lib/prisma";

export const app: Express = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  const specialty = await prisma.specialty.create({
    data: {
      title: "Test",
    },
  });

  res.status(200).json({
    success: true,
    message: "Data created successfully",
    data: specialty,
  });
});

export default app;
