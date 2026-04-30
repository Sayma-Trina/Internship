const API_BASE = import.meta.env.VITE_API_BASE || "https://localhost:7092/api";
const API_URL = `${API_BASE}/auth`;

export const login = async (email, password, role) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Login failed");
    }

    return await response.json();
  } catch (error) {
    console.error("AuthService login error:", error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error("AuthService register error:", error);
    throw error;
  }
};