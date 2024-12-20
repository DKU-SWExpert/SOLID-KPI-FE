import { Routes, Route } from "react-router-dom";
import PublicRoute from "@routes/PublicRoute";
import NotFound from "@pages/404";
import Layout from "@components/Layout";
import Login from "@pages/Login";
import SwTestInputResult from "@pages/SwTestInputResult";
import Home from "@pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
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
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="*"
          element={
            <PublicRoute>
              <NotFound />
            </PublicRoute>
          }
        />
        <Route
          path="/sw-test/request"
          element={
            <PublicRoute>
              <SwTestInputResult />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
