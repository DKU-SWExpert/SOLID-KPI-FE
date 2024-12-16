import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PublicRoute from "@routes/PublicRoute";
import NotFound from "@pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
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
      </Routes>
    </>
  );
}

export default App;
