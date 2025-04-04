import express, { Request } from "express";
import router from "./router";
import cors from "cors";
import { errorHandler } from "./errors/error-handler";
// import expressListRoutes from "express-list-routes";

const app = express();
const port = process.env.SIGA_PORT || 8000;

app.use(express.json());
app.use(cors<Request>());
app.use(router);
app.use(errorHandler);

app.listen(+port, () => {
  // expressListRoutes(router);
  console.log(`Server is running on port ${port}`);
});
