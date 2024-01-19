import { UserSchema } from "@/schema/user";
import { model, models } from "mongoose";

export const User = models.User || model("User", UserSchema) ;