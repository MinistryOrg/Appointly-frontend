import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const token = localStorage.token || "";

  const [loggedin, setLoggedIn] = useState(localStorage.token ? true : false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken && decodedToken.email) {
          setEmail(decodedToken.email);
        }
      } catch (error) {
        console.error("Invalid token:", error.message);
      }
    }
  }, [token]);

  function changeLoggedIn(value, userEmail = "") {
    setLoggedIn(value);
    setEmail(userEmail);
    if (value === false) {
      localStorage.clear();
      setEmail("");
    }
  }

  return (
    <LoginContext.Provider value={{ loggedin, email, changeLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { LoginProvider, useLogin };
