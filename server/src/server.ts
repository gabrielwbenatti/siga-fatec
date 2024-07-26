import express from "express";
import router from "./router";
import expressListRoutes from "express-list-routes";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

app.listen(+port, () => {
  // expressListRoutes(router);
  console.log(`Server is running on port ${port}`);
});
