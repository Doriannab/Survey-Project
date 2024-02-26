import axios from "axios";

// Appel à l'API
const API_BASE_URL = "https://pulso-backend.onrender.com/api/user/";

// Vérifier l'existence de l'email
export const checkEmailExists = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}check-email/`, {
      email,
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

// Inscrire un utilisateur
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

// Connecter un utilisateur
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

// Fonction pour renouveler le token
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${API_BASE_URL}refresh-token/`, {
      refresh_token: refreshToken,
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
