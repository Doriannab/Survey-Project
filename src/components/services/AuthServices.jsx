import axios from "axios";

const API_BASE_URL = "https://django-backend-4yf4.onrender.com/api/user/";

export const registerUser = async (email, password, password2, name, tc) => {
  try {
    const response = await axios.post(`${API_BASE_URL}register/`, {
      email,
      password,
      password2,
      name,
      tc,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}login/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};
