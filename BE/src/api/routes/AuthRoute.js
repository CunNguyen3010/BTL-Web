import { Router } from "express";
import { login, register, getAllAccounts, searchAccounts } from "../controllers/AuthController";

const authRoute = new Router();

// /auth/login
authRoute.post("/login", login);

authRoute.post("/register", register);

authRoute.get("/", getAllAccounts)

authRoute.get("/search", searchAccounts)

export default authRoute;
