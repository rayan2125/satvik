import mongoose from "mongoose";

// const dbURL = "mongodb://127.0.0.1:27017/bookManagement"
const dbURL = "mongodb://localhost:27017/satvik";


mongoose.connect(dbURL).then(() => {
    console.log("db connected...");
}).catch((e) => {
    console.log("not connected", e);
});
