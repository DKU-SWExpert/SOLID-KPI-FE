import { Routes, Route } from "react-router-dom";
import PublicRoute from "@routes/PublicRoute";
import NotFound from "@pages/404";
import Layout from "@components/Layout";
import Login from "@pages/Login";
import Home from "@pages/Home";
import StudentRoutes from "@routes/StudentRoutes";
import ProtectedRoute from "@routes/ProtectedRoute";
import ProfessorRoutes from "@routes/ProfessorRoutes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/student/*"
          element={
            <ProtectedRoute>
              <StudentRoutes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/professor/*"
          element={
            <ProtectedRoute>
              <ProfessorRoutes />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
