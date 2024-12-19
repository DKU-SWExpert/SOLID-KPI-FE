import "@coreui/coreui/dist/css/coreui.min.css";
import { CContainer } from "@coreui/react";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import MiniHeader from "@components/MiniHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="c-app">
      <div className="c-wrapper d-flex">
        <Sidebar />
        <div className="c-body flex-grow-1">
          <Header />
          <MiniHeader />
          <main className="c-main">
            <CContainer fluid>
              <Outlet />
            </CContainer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
