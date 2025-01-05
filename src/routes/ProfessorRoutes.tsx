import SolidCloud from "@/pages/Professor/SolidCloud";
import SwTest from "@/pages/Professor/SwTest"
import ProfessorInternship from "@pages/Professor/Internship";
import IndustryAcademiaProject from "@pages/Professor/IndustryAcademiaProject";
import {Route, Routes} from "react-router-dom";

const ProfessorRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
            <Route path="internship" element={<ProfessorInternship />}/>
            <Route path="industry-academia-project" element={<IndustryAcademiaProject />}/>
        </Routes>
    );
};

export default ProfessorRoutes;
