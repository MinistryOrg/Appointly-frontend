import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAdmin, loggedIn, role } = useAuth();

  useEffect(() => {
    console.log("loggedIn:", loggedIn);
    console.log("isAdmin:", isAdmin);
    if (!loggedIn) {
      // Redirect to login page if not logged in
      navigate("/login");
    } else if (!isAdmin) {
      // Redirect admin to the dashboard
      navigate("/dashboard", { replace: true });
    } else {
      // Redirect to home page if not admin
      navigate("/notadmin", { replace: true });
    }
  }, [loggedIn]);

  return isAdmin ? children : null;
}

export default ProtectedRoute;
