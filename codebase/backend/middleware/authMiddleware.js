import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/secret.js";

export const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(403).json({ success: false, message: "No token found" });
  }
  const user = jwt.verify(token, JWT_SECRET);
  if (!user){
    return res.status(403).json({ success: false, message: "Token is not valid" });
  }
  req.user = user;
  next();
};
