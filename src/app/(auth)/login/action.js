"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function LoginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
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

  const findUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!findUser) {
    return {
      status: "failed",
      message: "User not found",
    };
  }

  const isPassword = await bcrypt.compare(password, findUser.password);
  if (!isPassword) {
    return {
      status: "failed",
      message: "Invalid credential",
      data: {
        email,
        password,
      },
    };
  }

  const payload = {
    id: findUser.id,
    username: findUser.username,
    email: findUser.email,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  cookies().set("token", jwtToken, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/dashboard/events");
}
