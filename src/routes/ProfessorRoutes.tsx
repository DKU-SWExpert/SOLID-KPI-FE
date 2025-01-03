import SolidCloud from "@/pages/Professor/SolidCloud";
import SwTest from "@/pages/Professor/SwTest"
import NumOfStudent from "@/pages/Professor/NumOfStudent"
import Award from "@/pages/Professor/Award"
import {Route, Routes} from "react-router-dom";

const ProfessorRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
            <Route path="award" element={<Award/>}/>
            <Route path="number-of-student" element={<NumOfStudent/>}/>
        </Routes>
    );
};

export default ProfessorRoutes;
