import { TransSchema } from "@/schema/trans";
import { model, models } from "mongoose";

export const User = models.Trans || model("Trans", TransSchema);