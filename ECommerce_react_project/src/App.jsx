import { Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import SendOTP  from "./pages/SendOTP";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sendotp" element={<SendOTP />} />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/logout" element={<Logout />} />

        {/* Catch-all invalid routes → redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
