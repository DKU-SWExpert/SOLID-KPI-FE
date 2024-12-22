import { Routes, Route } from "react-router-dom";
import Application from "@/pages/Student/Internship/Application";
import EnterResult from "@/pages/Student/Internship/EnterResult";
import SwTestInputResult from "@pages/SwTestInputResult";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="internship/application" element={<Application />} />
      <Route path="internship/enter-result" element={<EnterResult />} />
      <Route path="sw-test/request" element={<SwTestInputResult />} />
    </Routes>
  );
};

export default StudentRoutes;
