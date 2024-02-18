import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAdmin, loggedIn, loadData } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      if (!loadData) {
        <Spinner />;
      } else {
        navigate(isAdmin ? "/dashboard" : "/notadmin", { replace: true });
      }
    }
  }, [loggedIn, isAdmin, loadData]);

  return isAdmin ? children : null;
}

export default ProtectedRoute;
