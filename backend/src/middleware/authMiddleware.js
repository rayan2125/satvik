import jwt from "jsonwebtoken";
import User from "../model/auth.model.js";


const checkUserAuth = async (req, res, next) => {
 
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer ")) {
    try {
      token = authorization.split(" ")[1];
      
      const JWT_SECRET_KEY = "kjkjskdjkjkahhiousda";
      const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
      
      const userID = decodedToken.userId;
      const flag = decodedToken.userFlag;

      let user;

      if (flag === "user") {
        user = await User.findByPk(userID);
      } else if (flag === "merchant") {
        user = await Merchant.findByPk(userID);
      }

      if (user) {
        req.userId = userID;
        req.flag = flag; 
        next();
      } else {
        res.status(401).json({ status: "failed", message: "Unauthorized User" });
      }
    } catch (error) {
      res.status(401).json({ status: "failed", message: "Unauthorized Userss",error:error.message });
    }
  } else {
    res.status(401).json({ status: "failed", message: "Unauthorized User, No Token" });
  }
};


export default checkUserAuth;
