import axios from "axios";
import { UserData } from "./index";

const API_URL = "https://dummyjson.com/users";

export const fetchUsers = async (): Promise<UserData> => {
  try {
    const response = await axios.get<UserData>(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
