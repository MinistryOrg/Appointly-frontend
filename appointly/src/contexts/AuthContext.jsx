import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const BASE_URL = `https://appointly-production.up.railway.app/api/v1/auth/appointly`;

const AuthContext = createContext();

function AuthProvider({ children }) {
  const token = localStorage.token || "";

  const [loggedIn, setLoggedIn] = useState(localStorage.token ? true : false);
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");

  const [logEmail, setLogEmail] = useState("");

  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [role, setRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (role) {
      // Check if the role is "ADMIN"
      setIsAdmin(role === "ADMIN");
    }
  }, [role]);

  async function login(e) {
    e.preventDefault();
    const abortController = new AbortController();
    const url = BASE_URL + `/authenticate`;
    try {
      const res = await fetch(url, {
        signal: abortController.signal,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          email: logEmail,
          password: password,
        }),
      });

      if (!res.ok) {
        setIsInvalid(true);
        throw new Error("something went wrong");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      const decode = jwtDecode(data.token);
      changeLoggedIn(true, decode.email);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        if (
          decodedToken &&
          decodedToken.email &&
          decodedToken.lastname &&
          decodedToken.firstname &&
          decodedToken.role
        ) {
          setEmail(decodedToken.email);
          setLastname(decodedToken.lastname);
          setFirstname(decodedToken.firstname);
          setRole(decodedToken.role);
          setIsAdmin(decodedToken.role === "ADMIN");
        }
      } catch (error) {
        console.error("Invalid token:", error.message);
      }
    }
  }, [token]);

  function changeLoggedIn(
    value,
    userEmail = "",
    lastname = "",
    firstname = "",
    role = ""
  ) {
    setLoggedIn(value);
    setEmail(userEmail);
    setLastname(lastname);
    setFirstname(firstname);
    setRole(role);
    setIsAdmin(role === "ADMIN");

    if (value === false) {
      localStorage.clear();
      setEmail("");
      setLastname("");
      setFirstname("");
      setLogEmail("");
      setPassword("");
      setRole("");
      setIsAdmin(false);
      setIsInvalid(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        email,
        lastname,
        firstname,
        changeLoggedIn,
        logEmail,
        setLogEmail,
        password,
        setPassword,
        isInvalid,
        login,
        role,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
