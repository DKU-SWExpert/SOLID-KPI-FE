import {Route, Routes} from "react-router-dom";
import FileStore from "src/pages/Management/FileStore";
import ProfessorManagement from "@pages/Management/Professor"
import SolidCloud from "@pages/Dashboard/SolidCloud";
import SwTest from "src/pages/Dashboard/SwTest";
import Internship from "src/pages/Dashboard/Internship";
import IndustryAcademiaProject from "src/pages/Dashboard/IndustryAcademiaProject";
import Award from "src/pages/Dashboard/Award";
import NumOfStudent from "src/pages/Dashboard/NumOfStudent";
import CompetitionContest from "src/pages/Dashboard/CompetitionContest";

const SuperAdminRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
            <Route path="internship" element={<Internship />}/>
            <Route path="industry-academia-project" element={<IndustryAcademiaProject />}/>
            <Route path="award" element={<Award/>}/>
            <Route path="number-of-student" element={<NumOfStudent/>}/>
            <Route path="competition-contest" element={<CompetitionContest />} />
            <Route path="file-store-management" element={<FileStore/>}/>
            <Route path="professor-management" element={<ProfessorManagement/>} />
        </Routes>
    );
};

export default SuperAdminRoutes;
