import { Routes, Route } from "react-router-dom";
import Application from "@/pages/Student/Internship/Application";
import EnterResult from "@/pages/Student/Internship/EnterResult";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="internship/application" element={<Application />} />
      <Route path="internship/enter-result" element={<EnterResult />} />
    </Routes>
  );
};

export default StudentRoutes;
