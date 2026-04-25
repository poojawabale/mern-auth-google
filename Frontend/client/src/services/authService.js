import axios from "axios";

const API = "https://mern-auth-backend-4cin.onrender.com";

export const registerUser = async (data) => {
  const res = await axios.post(`${API}/api/auth/register`, data);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${API}/api/auth/login`, data);
  return res.data;
};