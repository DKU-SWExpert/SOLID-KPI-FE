import SolidCloud from "@/pages/Professor/SolidCloud";
import SwTest from "@/pages/Professor/SwTest"
import ProfessorInternship from "@pages/Professor/Internship";
import IndustryAcademiaProject from "@pages/Professor/IndustryAcademiaProject";
import NumOfStudent from "@/pages/Professor/NumOfStudent"
import Award from "@/pages/Professor/Award"
import {Route, Routes} from "react-router-dom";

const ProfessorRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
            <Route path="internship" element={<ProfessorInternship />}/>
            <Route path="industry-academia-project" element={<IndustryAcademiaProject />}/>
            <Route path="award" element={<Award/>}/>
            <Route path="number-of-student" element={<NumOfStudent/>}/>
            <Route path="award" element={<Award/>}/>
            <Route path="number-of-student" element={<NumOfStudent/>}/>
            <Route path="internship" element={<ProfessorInternship />} />
        </Routes>
    );
};

export default ProfessorRoutes;
