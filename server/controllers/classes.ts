import { Context } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { client } from "../services/apiConfig.ts";

const indexClasses = async (context: Context) => {
  try {
    console.log("context", context);
  } catch (error) {
    console.error("error", error);
  }
};

export { indexClasses };
