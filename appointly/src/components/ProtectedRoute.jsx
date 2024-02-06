import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAdmin, loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      // Redirect to login page if not logged in
      navigate("/login");
    } else if (!isAdmin) {
      // Redirect to home page or another route if not admin
      navigate("/dashboard");
    }
  }, [loggedIn, isAdmin, navigate]);

  return isAdmin ? children : null;
}

export default ProtectedRoute;
