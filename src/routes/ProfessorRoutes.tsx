import SolidCloud from "@/pages/Professor/SolidCloud";
import { Route, Routes } from "react-router-dom";

const ProfessorRoutes = () => {
  return (
    <Routes>
      <Route path="solid-cloud" element={<SolidCloud />} />
    </Routes>
  );
};

export default ProfessorRoutes;
