import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [loggedin, setLoggedIn] = useState(localStorage.token ? true : false);
  const [email, setEmail] = useState("");

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
