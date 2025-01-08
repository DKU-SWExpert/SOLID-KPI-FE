import {Route, Routes} from "react-router-dom";
import FileStore from "@pages/Professor/FileStore";

const SuperAdminRoutes = () => {
    return (
        <Routes>
            <Route path="file-store-management" element={<FileStore/>}/>
        </Routes>
    );
};

export default SuperAdminRoutes;
