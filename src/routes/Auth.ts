import { Singnup } from "../controllers/AuthController";
import { Router } from "express";

const AuthRouter = Router();
AuthRouter.post("/signup", Singnup);
export default AuthRouter;
