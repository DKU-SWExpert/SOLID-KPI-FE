import { Route, Routes } from "react-router-dom";
import FileStore from "@/pages/Management/FileStore";
import SolidCloud from "@pages/Dashboard/SolidCloud";
import SwTest from "@/pages/Dashboard/SwTest";
import Internship from "@/pages/Dashboard/Internship";
import IndustryAcademiaProject from "@/pages/Dashboard/IndustryAcademiaProject";
import Award from "@/pages/Dashboard/Award";
import NumOfStudent from "@/pages/Dashboard/NumOfStudent";
import CompetitionContest from "@/pages/Dashboard/CompetitionContest";
import ProfessorManagement from "@pages/Management/Professor";
import Compaines from "@/pages/SuperAdmin/Companies";
import StudentList from "@/pages/Management/studuentlist";

const SuperAdminRoutes = () => {
  return (
    <Routes>
      <Route path="solid-cloud" element={<SolidCloud />} />
      <Route path="sw-test" element={<SwTest />} />
      <Route path="internship" element={<Internship />} />
      <Route
        path="industry-academia-project"
        element={<IndustryAcademiaProject />}
      />
      <Route path="award" element={<Award />} />
      <Route path="number-of-student" element={<NumOfStudent />} />
      <Route path="competition-contest" element={<CompetitionContest />} />
      <Route path="file-store-management" element={<FileStore />} />
      <Route path="company-list" element={<Compaines />} />
      <Route path="professor-management" element={<ProfessorManagement />} />
      <Route path="student-list" element={<StudentList />} />
    </Routes>
  );
};

export default SuperAdminRoutes;
