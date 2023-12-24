import { Router } from "express";
import { getAllNotes, getNote, createNode, updateNote, deleteNote, searchNote, getUserNote } from "../controllers/NoteController";
import { checkToken } from "../middlewares/authMiddleware";

const noteRoute = Router();

// CRUD
noteRoute.get("/", getAllNotes);
noteRoute.get("/search", searchNote);
// GET_READ
noteRoute.get("/:id", getNote);
noteRoute.get("/user/:name", checkToken, getUserNote);

// POST_CREATE
noteRoute.post("/", createNode);
// PUT_UPDATE
noteRoute.put("/:id", updateNote);
// DELETE_DELETE
noteRoute.delete("/:id", deleteNote);


export default noteRoute;