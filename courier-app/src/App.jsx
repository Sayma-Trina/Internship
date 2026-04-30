import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import MainHome from "./pages/MainHome";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Track from "./pages/Track";
import { CalculateCharge } from "./pages/CalculateCharge";
import AdminDashboard from "./pages/AdminDashboard";
import AdminExport from "./pages/AdminExport";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/login" element={<Login />} />  

        <Route path="/register" element={<Registration />} />
        <Route path="/track" element={<Track />} />
        <Route path="/calculate" element={<CalculateCharge />} />
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/admin/export" element={<AdminExport/>} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
