import { Router } from "express";
import { login, register, getAllAccounts } from "../controllers/AuthController";

const authRoute = new Router();

// /auth/login
authRoute.post("/login", login);

authRoute.post("/register", register);

authRoute.get("/", getAllAccounts)
export default authRoute;
