import { getUsers, getUser, addUser, deleteUserById } from"../controllers/usersControllers.js";
import express from "express";

const router = express.Router();
router.get("/", getUsers);
router.get("/:id", getUser);                 
router.post("/", addUser);           
router.delete("/:id", deleteUserById);
export default router;
