import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  loginWithGoogle,
  forgotPassword,
  resetPassword
} from "../controllers/authController.js";
import auth from "../middleware/auth.js"

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/login-with-google", loginWithGoogle);
authRouter.get('/protected', auth, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});

export default authRouter;
