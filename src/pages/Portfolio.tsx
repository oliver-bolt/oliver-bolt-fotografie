import { Navigate } from "react-router-dom";

// Work is not a page — redirect to home
const Portfolio = () => {
  return <Navigate to="/" replace />;
};

export default Portfolio;
