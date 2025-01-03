import SolidCloud from "@/pages/Professor/SolidCloud";
import SwTest from "@/pages/Professor/SwTest"
import ProfessorInternship from "@pages/Professor/Internship";
import {Route, Routes} from "react-router-dom";

const ProfessorRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
            <Route path="internship" element={<ProfessorInternship />} />
        </Routes>
    );
};

export default ProfessorRoutes;
