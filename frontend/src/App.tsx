import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
