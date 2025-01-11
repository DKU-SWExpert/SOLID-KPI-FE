import {Route, Routes} from "react-router-dom";
import FileStore from "src/pages/Management/FileStore";
import SolidCloud from "@pages/Dashboard/SolidCloud";
import SwTest from "src/pages/Dashboard/SwTest";
import ProfessorInternship from "src/pages/Dashboard/Internship";
import IndustryAcademiaProject from "src/pages/Dashboard/IndustryAcademiaProject";
import Award from "src/pages/Dashboard/Award";
import NumOfStudent from "src/pages/Dashboard/NumOfStudent";
import CompetitionContest from "src/pages/Dashboard/CompetitionContest";

const SuperAdminRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
            <Route path="internship" element={<ProfessorInternship />}/>
            <Route path="industry-academia-project" element={<IndustryAcademiaProject />}/>
            <Route path="award" element={<Award/>}/>
            <Route path="number-of-student" element={<NumOfStudent/>}/>
            <Route path="competition-contest" element={<CompetitionContest />} />
            <Route path="file-store-management" element={<FileStore/>}/>
        </Routes>
    );
};

export default SuperAdminRoutes;
