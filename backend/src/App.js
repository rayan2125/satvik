import express from "express";
import router from "./routers/index.js";
import './db/dbConfig.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(8081, () => {
    console.log("Server is running on http://localhost:8081");
});
