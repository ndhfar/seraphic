"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export default async function RegisterAction(_, formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!username || !email || !password) {
    return {
      status: "failed",
      message: "Please complete all fields.",
      data: {
        username,
        email,
        password,
      },
    };
  }

  if (password.length < 8) {
    return {
      status: "failed",
      message: "Password must be 8 characters or longer.",
      data: {
        username,
        email,
        password,
      },
    };
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    return {
      status: "success",
      message: "Register success! please log in",
    };
  } catch (error) {
    console.log(error);

    return {
      status: "failed",
      message: "Registration Failed",
    };
  }
}
