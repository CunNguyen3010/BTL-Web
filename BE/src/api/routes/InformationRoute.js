import { Router } from "express";
import { getAllInformations, searchInformation, createInformation, updateInformation, deleteInformation } from "../controllers/InformationController";
// import { checkToken } from "../middlewares/authMiddleware";

const informationRoute = Router();

// CRUD
informationRoute.get("/", getAllInformations);
informationRoute.get("/search", searchInformation);

// GET_READ
// informationRoute.get("/:id", getInformation);
// informationRoute.get("/user/:name", checkToken, getUserInformation);
// POST_CREATE
informationRoute.post("/", createInformation);
// PUT_UPDATE
informationRoute.put("/:id", updateInformation);
// DELETE_DELETE
informationRoute.delete("/:id", deleteInformation);


export default informationRoute;