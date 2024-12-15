import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PublicRoute from "@routes/PublicRoute";

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
      </Routes>
    </>
  );
}

export default App;
