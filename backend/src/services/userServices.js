const UserServices = {
    create: async (data) => {
      // Validation logic (reuse existing validation logic)
      // Save the user to the database
      
      return {  email: data.email, password: data.password }; // Example return
    },
    update: async (id, data) => {
      // Logic for updating the user
      return { id, ...data };
    },
    view: async (id) => {
      // Logic for fetching the user by ID
      return { id, email: "test@example.com", name: "Test User" }; // Example return
    },
    delete: async (id) => {
      // Logic for deleting the user
      return true; // Return true if successfully deleted
    },
  };
  
  export default UserServices;
  