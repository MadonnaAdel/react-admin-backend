import express from "express";
import {
  getOrders,
  getOrder,
  addOrder,
  deleteOrder,
} from "../controllers/ordersControllers.js";

const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", addOrder);
router.delete("/:id", deleteOrder);

export default router;
