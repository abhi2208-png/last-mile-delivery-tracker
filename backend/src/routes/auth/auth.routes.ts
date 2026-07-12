import { Router } from "express";

const router = Router();

/*
    POST /api/v1/auth/register
*/
router.post("/register", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Register endpoint working",
  });
});

/*
    POST /api/v1/auth/login
*/
router.post("/login", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Login endpoint working",
  });
});

/*
    GET /api/v1/auth/me
*/
router.get("/me", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Current User endpoint working",
  });
});

export default router;