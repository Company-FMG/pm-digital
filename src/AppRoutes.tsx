import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Complaint from "./routes/Complaint";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route index element={<Home />} />
            <Route path="login" element={<Login/>}/>
            <Route path="denuncia" element={<Complaint/>}/>
        </Routes>
    )
}
