import dotenv from "dotenv";
import express, {
  json,
  urlencoded,
  type Express,
  type Request,
  type Response,
} from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
