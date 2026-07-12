import { Request, Response } from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../../services/auth/auth.service";

export const register = async (req: Request, res: Response) => {
  const result = await registerUser();

  return res.status(200).json(result);
};

export const login = async (req: Request, res: Response) => {
  const result = await loginUser();

  return res.status(200).json(result);
};

export const me = async (req: Request, res: Response) => {
  const result = await getCurrentUser();

  return res.status(200).json(result);
};