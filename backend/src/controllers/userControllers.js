import UserServices from "../services/userServices.js"


export const createUser = async (req, res) => {
    try {
      console.log(req.body)
      const userDetails = await UserServices.create(req.body);
  
      
      res.status(201).send({
        status: "success",
        message: "User created successfully",
        userDetails,
      });
    } catch (error) {
      console.log(error)
      res.status(400).send({
        status: "error",
        message: error.message || "Failed to create user",
      });
    }
  };
export const updateUser = async () => {

}
export const viewUser = async () => {

}
export const deleteUser = async () => {

}