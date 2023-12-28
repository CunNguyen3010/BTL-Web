import { Router } from "express";
import { getAllInformations, searchInformation, createInformation, updateInformation, deleteInformation } from "../controllers/InformationController";
// import { checkToken } from "../middlewares/authMiddleware";

const informationRoute = Router();

// CRUD
informationRoute.get("/", getAllInformations); // lấy toàn bộ đơn hàng
informationRoute.get("/search", searchInformation); // lấy theo bộ lọc

// POST_CREATE
informationRoute.post("/", createInformation); // tạo đơn hàng
// PUT_UPDATE
informationRoute.put("/", updateInformation); // update đơn hàng
// DELETE_DELETE
informationRoute.delete("/", deleteInformation); // xóa đơn hàng


export default informationRoute;