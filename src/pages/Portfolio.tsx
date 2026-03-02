import { Navigate } from "react-router-dom";

// Work is no longer a separate page — redirect to home
const Portfolio = () => {
  return <Navigate to="/" replace />;
};

export default Portfolio;
