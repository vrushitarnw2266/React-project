import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/setAuth";

export default function ProtectedRoute() {
    const { auth } = useAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />

}