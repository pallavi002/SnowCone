import { register, login } from "../controllers/authController";
import { getProfile } from "../controllers/userController";
import authorize from "controllers/middleware";

export default function initRoutes(app: any) {
    app.post("/register", register);
    app.post("/login", login);
    app.get("/profile/:id", authorize, getProfile);
}