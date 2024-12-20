import { useAuthStore } from "@/store/auth";
import StudentHome from "@/pages/Student/StudentHome";
import ProfessorHome from "@/pages/Professor/ProfessorHome";
import AdminHome from "@/pages/Admin/AdminHome";
import SuperAdminHome from "@/pages/SuperAdmin/SuperAdminHome";
import Login from "../Login";

const homeByRole = {
  STUDENT: <StudentHome />,
  PROFESSOR: <ProfessorHome />,
  ADMIN: <AdminHome />,
  SUPER_ADMIN: <SuperAdminHome />,
  NOT_A_MEMBER: <Login />,
};

const Home = () => {
  const { role } = useAuthStore();
  return homeByRole[role];
};

export default Home;
