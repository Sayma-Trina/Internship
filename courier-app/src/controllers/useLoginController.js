
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const API_BASE = import.meta.env.VITE_API_BASE;
const LOGIN_URL = `${API_BASE}/auth/login`;

export const useLoginController = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        const msg = await response.text();
        alert(msg);
        return;
      }

      const data = await response.json();
      console.log("Login successful:", data);

      if (role === "admin") {
        navigate("/admin"); 
      } else {
        navigate("/"); 
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    role,
    setRole,
    errors,
    handleLogin,
  };
};