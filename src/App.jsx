import { Route, Routes } from "react-router-dom";
import Additional from "./components/Additional";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
