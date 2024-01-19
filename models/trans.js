import { TransSchema } from "@/schema/trans";
import { model, models } from "mongoose";

export const Trans = models.Trans || model("Trans", TransSchema);