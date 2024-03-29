import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
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
  const [isLoading, setIsLoading] = useState(false);
  const [loadData, setLoadData] = useState(false);

  const [doneEdit, setDoneEdit] = useState(false);
  const [showChange, setShowChange] = useState(false);

  async function login(e) {
    e.preventDefault();
    const abortController = new AbortController();
    const url = BASE_URL + `/authenticate`;
    try {
      setIsLoading(true);
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
      console.log(decode);
      changeLoggedIn(true, decode.email);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
          setRole(decodedToken.role); // Make sure to set the role correctly
          setIsAdmin(decodedToken.role === "ADMIN");

          // Call changeLoggedIn with the correct role value
          changeLoggedIn(
            true,
            decodedToken.email,
            decodedToken.lastname,
            decodedToken.firstname,
            decodedToken.role
          );
        }
      } catch (error) {
        console.error("Invalid token:", error.message);
      } finally {
        // Set loading to false once the data is processed
        setLoadData(true);
      }
    }
  }, [token]);

  function changeLoggedIn(
    value,
    userEmail = "",
    lastname = "",
    firstname = "",
    userRole = ""
  ) {
    console.log("Received userRole:", userRole); // Add this line for logging

    setLoggedIn(value);
    setEmail(userEmail);
    setLastname(lastname);
    setFirstname(firstname);
    setRole(userRole); // Set the role state

    // Use the updated role to set isAdmin
    setIsAdmin(userRole === "ADMIN"); // Set isAdmin based on the userRole

    if (!value) {
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

  useEffect(() => {
    if (role) {
      // Check if the role is "ADMIN"
      setIsAdmin(role === "ADMIN");
      console.log("isAdminContext", isAdmin);
    }
  }, [role]);

  async function changePassword(oldPassword, newPassword, confirmPassword) {
    console.log(oldPassword);
    console.log(newPassword);
    console.log(confirmPassword);

    const url = BASE_URL + `/password`;
    const abortController = new AbortController();
    try {
      setDoneEdit(false);
      const res = await fetch(url, {
        signal: abortController.signal,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmationPassword: confirmPassword,
        }),
      });

      if (!res.ok) {
        setDoneEdit(false);
        throw new Error("something went wrong");
      }

      setDoneEdit(true);
    } catch (error) {
      console.log(error);
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
        changePassword,
        isLoading,
        doneEdit,
        setDoneEdit,
        showChange,
        setShowChange,
        loadData,
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
