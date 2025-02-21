import express from "express";
import { signin, logout, google} from "../controllers/auth.js";

const auth_router = express.Router();

auth_router.get("/", (req, res) => {
  res.json({ message: "auth auth_router ok" });
});

auth_router.post("/signin", signin);
auth_router.post("/logout", logout);
auth_router.post("/google", google);


export default auth_router;