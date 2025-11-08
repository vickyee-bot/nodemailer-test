import { User } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma/client";
import bcrypt from "bcryptjs";
import { generateOTP } from "../services/otpGenerater";
import { sendOTPEmail } from "../services/email";
export const Singnup = async (req: Request, res: Response) => {
  const { name, email, password }: User = req.body;
  const exustingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (exustingUser) {
    res.status(400).json({ message: "User already exists" });
    return;
  }
  const hashedPassord = await bcrypt.hash(password, 10);
  const otp = generateOTP();
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassord,
      otpCode: otp,
    },
  });
  await sendOTPEmail(newUser.email, newUser.name, otp);
  res.status(201).json({
    message: "Account created . Check you email to verify",
    user: newUser,
  });
};
