import SolidCloud from "@/pages/Dashboard/SolidCloud";
import SwTest from "@/pages/Dashboard/SwTest";
import Internship from "@/pages/Dashboard/Internship";
import IndustryAcademiaProject from "@/pages/Dashboard/IndustryAcademiaProject";
import NumOfStudent from "@/pages/Dashboard/NumOfStudent";
import Award from "@/pages/Dashboard/Award";
import CompetitionContest from "@/pages/Dashboard/CompetitionContest";
import { Route, Routes } from "react-router-dom";

const ProfessorRoutes = () => {
    return (
        <Routes>
            <Route path="solid-cloud" element={<SolidCloud/>}/>
            <Route path="sw-test" element={<SwTest/>}/>
            <Route path="internship" element={<Internship />}/>
            <Route path="industry-academia-project" element={<IndustryAcademiaProject />}/>
            <Route path="award" element={<Award/>}/>
            <Route path="number-of-student" element={<NumOfStudent/>}/>
            <Route path="competition-contest" element={<CompetitionContest />} />
        </Routes>
    );
};

export default ProfessorRoutes;
