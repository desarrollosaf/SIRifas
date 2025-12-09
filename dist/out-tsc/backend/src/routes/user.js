import { Router } from "express";
import { getCurrentUser, LoginUser, cerrarsesion } from "../controllers/users";
import { verifyToken } from "../middlewares/auth";
const router = Router();
router.post("/api/user/login", LoginUser);
router.get("/api/user/me", verifyToken, getCurrentUser);
router.post('/api/user/cerrarsesion', cerrarsesion);
export default router;
//# sourceMappingURL=user.js.map