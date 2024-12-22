import {Route, Routes} from "react-router-dom";
import PublicRoute from "@routes/PublicRoute";
import NotFound from "@pages/404";
import Layout from "@components/Layout";
import Login from "@pages/Login";
import SwTestInputResult from "@pages/SwTestInputResult";

function App() {
    // const { role } = useAuthStore();

    // if (role === "NOT_LOGGED_IN") {
    //   return <Login />;
    // }

    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/">
                    {/*
          role 별로 페이지를 구현해야함.
          Home을 만들고 그 안에 구현할지, 
          role 별로 페이지를 만들어서 라우팅할지 아직 미정
        */}
                </Route>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login/>
                        </PublicRoute>
                    }
                />
                <Route
                    path="*"
                    element={
                        <PublicRoute>
                            <NotFound/>
                        </PublicRoute>
                    }
                />
                <Route
                    path="/sw-test/request"
                    element={
                        <PublicRoute>
                            <SwTestInputResult/>
                        </PublicRoute>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
