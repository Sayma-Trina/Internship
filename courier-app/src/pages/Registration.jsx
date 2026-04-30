import React, { useState } from "react";
import Navbar from "../components/layout/NavBar";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";
import { COLORS, SPACING } from "../constants/colors";
import { Footer } from "../components/layout/Footer";
import { register } from "../services/authService";

export default function Registration() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!firstname.trim()) e.firstname = "First name is required";
    if (!lastname.trim()) e.lastname = "Last name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 8) e.password = "Password must be at least 8 characters";
    if (!phonenumber.trim()) e.phonenumber = "Phone number is required";
    else if (!/^\d{7,15}$/.test(phonenumber.replace(/\D/g, "")))
      e.phonenumber = "Enter a valid phone number (7-15 digits)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegist = async (ev) => {
    ev.preventDefault();
    setSuccess(false);
    if (!validate()) return;
    setSubmitting(true);

    try {
      const userData = {
        firstName: firstname,
        lastName: lastname,
        email,
        password,
        phoneNumber: phonenumber,
        role: "user" // Default role
      };

      await register(userData);
      
      setSuccess(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setErrors({});
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({ email: error.message || "Registration failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: COLORS?.background || "#f6f7fb", minHeight: "100vh" }}>
      <Navbar role={null} setRole={() => {}} />

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: SPACING?.large || "60px 20px",
      }}>
        <form onSubmit={handleRegist} style={{
          display: "flex",
          flexDirection: "column",
          gap: SPACING?.small || "12px",
          padding: SPACING?.large || "28px",
          borderRadius: 12,
          backgroundColor: COLORS?.card || "#ffffff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          minWidth: 360,
          width: "100%",
          maxWidth: 420,
        }}>
          <h2 style={{ textAlign: "center", margin: 0, color: COLORS?.text || "#111" }}>Create an account</h2>

          <Input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors.firstname}
          />

          <Input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            error={errors.lastname}
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input
            type="password"
            placeholder="Password (min 8 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <Input
            type="tel"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phonenumber}
          />

          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? "Registering…" : "Register"}
          </Button>

          {success && <div style={{ color: "#1e7e34", textAlign: "center", marginTop: SPACING?.small || 8 }}>Registration successful.</div>}
        </form>
      </div>
      <Footer/>
    </div>
  );
}

const styles = {
 
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    minWidth: "320px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1877ca",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  },
 
};