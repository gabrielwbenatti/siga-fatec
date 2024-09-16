import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import "./index.css";
import { PrismaneProvider } from "@prismane/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrismaneProvider>
      <RouterProvider router={router} />
    </PrismaneProvider>
  </React.StrictMode>
);
