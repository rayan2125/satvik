import UserRegistarion from "../models/userModels.js";


const UserServices = {
  create: async (data) => {
    try {
    console.log("data is coming :::::",data)
      const newUser = new UserRegistarion(data);

      // Save the instance to the database
      const savedUser = await newUser.save();

      // Return the saved user details
      return savedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  update: async (id, data) => {
    try {
      const updatedUser = await UserRegistarion.findByIdAndUpdate(id, data, { new: true });
      return updatedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  view: async (id) => {
    try {
      const user = await UserRegistarion.findById(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  delete: async (id) => {
    try {
      const deletedUser = await UserRegistarion.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error("User not found");
      }
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default UserServices;
