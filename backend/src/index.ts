import { Request, Response } from "express";

const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
    res.send({msg:"Api it's working!"});
});

app.listen(PORT, () => {
    console.log(`The backend server it's running in port ${PORT}`)
});