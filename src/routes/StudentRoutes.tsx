import { Routes, Route } from "react-router-dom";
import Application from "@/pages/Student/Internship/Application";
import EnterResult from "@/pages/Student/Internship/EnterResult";
import SwTestEnterResult from "src/pages/Student/SwTest/SwTestEnterResult";
import SwTestApplication from "src/pages/Student/SwTest/SwTestApplication";
import SwExpert from "@pages/Student/scholarship/swExpert";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="internship/application" element={<Application />} />
      <Route path="internship/enter-result" element={<EnterResult />} />
      <Route path="scholarship/sw-expert" element={<SwExpert />} />
      <Route path="sw-test/application" element={<SwTestApplication />} />
      <Route path="sw-test/enter-result" element={<SwTestEnterResult />} />
    </Routes>
  );
};

export default StudentRoutes;
