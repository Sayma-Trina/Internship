import React from "react";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { COLORS, SPACING } from "../constants/colors";
import Navbar from "../components/layout/NavBar";
import { Footer } from "../components/layout/Footer";
import { useLoginController } from "../controllers/useLoginController";

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    role,
    setRole,
    errors,
    handleLogin,
  } = useLoginController();

  return (
    <>
      <Navbar role={null} setRole={() => {}} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: SPACING.medium,
            padding: SPACING.large,
            borderRadius: "12px",
            backgroundColor: "rgb(166, 190, 204)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            minWidth: "350px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Login</h1>

          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={() => setRole("user")}
              />
              User Login
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
              />
              Admin Login
            </label>
          </div>

       

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <Button variant="primary" type="submit">
            Login
          </Button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
