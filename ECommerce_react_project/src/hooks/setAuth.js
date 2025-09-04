import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function setAuth() {
    return useContext(AuthContext);
}