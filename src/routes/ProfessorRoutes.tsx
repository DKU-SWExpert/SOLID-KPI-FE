import SolidCloud from "@/pages/Professor/SolidCloud";
<<<<<<< HEAD
import SwTest from "@/pages/Professor/SwTest"
import {Route, Routes} from "react-router-dom";

const ProfessorRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
        </Routes>
    );
=======
import { Route, Routes } from "react-router-dom";
import ProfessorInternship from "@pages/Professor/Internship";

const ProfessorRoutes = () => {
  return (
    <Routes>
      <Route path="solid-cloud" element={<SolidCloud />} />
      <Route path="internship" element={<ProfessorInternship />} />
    </Routes>
  );
>>>>>>> f5eea8c (feat(professor-routes): internship route 추가)
};

export default ProfessorRoutes;
