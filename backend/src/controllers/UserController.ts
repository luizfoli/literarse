import e, { Request, Response } from "express";

import UserModel from "../models/UserModel";

const users: {name: String, lastName: String, email: String, birthdate: String}[] = [];

export default function UserController() {
  function get(req: Request, res: Response) {
    res.send({ msg: "List off all users", data: users });
    return res;
  }

  function post(req: Request, res: Response) {
    const { name, lastName, email, birthdate } = req.body;

    if (!name || !lastName || !email || !birthdate) {
      res.send({ msg: "Necessary send all fields to create a user" });
      return res;
    }

    users.push({name, lastName, email, birthdate});

    res.send({ msg: `The user with email ${email} was created with success` });
    return res;
  }
}
