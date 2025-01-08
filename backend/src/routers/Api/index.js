import express from "express";
import userRouter from "./userApi.js";


const routers = express.Router();

// Array of routes and their respective routers
const routes = [
  { path: "/user", router: userRouter },
  
];

// Loop through the routes and apply them to the router
routes.forEach(({ path, router }) => {
  routers.use(path, router);
});

export default routers;
