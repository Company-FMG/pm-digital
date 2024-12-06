import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Login from "./routes/auth/Login";
import Register from "./routes/auth/Register";
import ComplaintViaturaCirculacao from "./routes/complaintViaturas/ComplaintViaturaCirculacao";
import ComplaintRegister from "./routes/complaintRegister/ComplaintRegister";
import Complaint from "./routes/complaint/Complaint";
import Perfil from "./routes/profile/Perfil";
import InfoOcorrencia from "./components/global/InfoOcorrencia";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="home" element={<Home/>} />
            <Route path="perfil" element ={<Perfil/> } />
            <Route path="viaturas" element={<ComplaintViaturaCirculacao/>}/>
            <Route path="newcomplaint" element={<ComplaintRegister/>}/>
            <Route path="denuncia" element={<Complaint/>}/>
            <Route path="infoocorrencia" element={<InfoOcorrencia/>}/>
        </Routes>
    )
}
