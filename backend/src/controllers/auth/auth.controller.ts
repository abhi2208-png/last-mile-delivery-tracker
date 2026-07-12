import { Request, Response } from "express";
import {
  registerSchema,
  loginSchema,
} from "../../services/auth/auth.validation";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../../services/auth/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const data = registerSchema.parse(req.body);

    const result = await registerUser(data);

    return res.status(201).json(result);
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body);

    const result = await loginUser(data);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
import { AuthRequest } from "../../middleware/auth/auth.middleware";

export const me = async (req: AuthRequest, res: Response) => {
  try {
    const result = await getCurrentUser(req.user!.id);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};