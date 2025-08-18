import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/secret.js";

export const isAuth = (req, res, next) => {
  //  const authHeader = req.headers.authorization;

  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   return res
  //     .status(403)
  //     .json({ success: false, message: "No or invalid token provided" });
  // }

  // const token = authHeader.split(" ")[1]; // get the part after "Bearer"
  
 
  // const user = jwt.verify(token, JWT_SECRET);
  // if (!user){
  //   return res.status(403).json({ success: false, message: "Token is not valid" });
  // }
  // req.user = user;
  next();
};
