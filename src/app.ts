import express, {
  json,
  urlencoded,
  type Express,
  type Request,
  type Response,
} from "express";

export const app: Express = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server Running",
  });
});

export default app;
