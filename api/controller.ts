import { RequestHandler } from "express";
import { Users } from "./model";

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await Users.findAll();
  console.log(users);
  res.send(users);
};
