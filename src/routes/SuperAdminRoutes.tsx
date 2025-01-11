import {Route, Routes} from "react-router-dom";
import FileStore from "@pages/Professor/FileStore";
import SuperAdminInternship from "@pages/SuperAdmin/Internship";

const SuperAdminRoutes = () => {
    return (
        <Routes>
            <Route path="internship" element={<SuperAdminInternship/>}/>
            <Route path="file-store-management" element={<FileStore/>}/>
        </Routes>
    );
};

export default SuperAdminRoutes;
