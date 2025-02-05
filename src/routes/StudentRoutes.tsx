import { Route, Routes } from "react-router-dom";
import Application from "@/pages/Student/Internship/Application";
import EnterResult from "@/pages/Student/Internship/EnterResult";
import SwTestEnterResult from "@/pages/Student/SwTest/SwTestEnterResult";
import SwTestApplication from "@/pages/Student/SwTest/SwTestApplication";
import SwExpert from "@/pages/Student/scholarship/swExpert";
import SwSupport from "@/pages/Student/scholarship/SwSupport";
import CompetitionContest from "@pages/Student/SwTalent/ CompetitionContest";
import Thesis from "@pages/Student/SwTalent/ Thesis";
import DKUStarTrack from "@/pages/Student/scholarship/DKUStarTrack";
import SwConvergence from "@/pages/Student/scholarship/sw-convergence/Index";
import SwRisingStar from "@pages/Student/scholarship/SwRisingStar";

const StudentRoutes = () => {
    return (
        <Routes>
            <Route path="internship/application" element={<Application/>}/>
            <Route path="internship/enter-result" element={<EnterResult/>}/>
            <Route path="scholarship/sw-expert" element={<SwExpert/>}/>
            <Route path="scholarship/supporters" element={<SwSupport/>}/>
            <Route path="scholarship/sw-talent/competition-contest" element={<CompetitionContest/>}/>
            <Route path="scholarship/sw-talent/thesis" element={<Thesis/>}/>
            <Route path="sw-test/application" element={<SwTestApplication/>}/>
            <Route path="sw-test/enter-result" element={<SwTestEnterResult/>}/>
            <Route path="scholarship/dku-startrack" element={<DKUStarTrack/>}/>
            <Route path="scholarship/sw-convergence" element={<SwConvergence />}/>
            <Route path="scholarship/sw-rising-star" element={<SwRisingStar />} />
        </Routes>
    );
};

export default StudentRoutes;



