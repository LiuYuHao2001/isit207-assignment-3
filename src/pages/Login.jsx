import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully!");

        // Switch to login mode after successful sign up
        setIsSignUp(false);
        setError(""); // Clear any errors
        setError("Account created successfully! Please log in.");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully!");

        if (onLogin) {
          onLogin();
        }

        navigate("/"); // Redirect to home after login
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please log in instead.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return "Invalid email or password.";
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>{isSignUp ? "Create Account" : "Log In"}</h2>

        {error && (
          <div
            className={`${styles.message} ${
              error.includes("successfully") ? styles.success : styles.error
            }`}
          >
            {error}
          </div>
        )}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
        </button>

        <div className={styles.switch}>
          <span>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError(""); // Clear errors
            }}
            className={styles.switchButton}
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
