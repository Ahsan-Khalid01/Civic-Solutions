import axios from "axios";

export const userRegistration = async (data) => {
  const response = await axios.post(
    "http://localhost/civic-solution-Backend/userRegistration.php",
    data,
    {
      headers: {
        "Content-Type": "application/json", // ← this was missing
      },
    },
  );
  console.log("Response from user registration:", response.data);
  return response.data;
};

export default userRegistration;
