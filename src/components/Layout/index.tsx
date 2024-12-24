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
        <div className="c-body flex-grow-1 ">
          <Header />
          <MiniHeader />
          <CContainer
            fluid
            className="flex-grow-1"
            style={{
              overflowY: "auto",
              height: "calc(100vh - 112px)", // Header(64px) + MiniHeader(48px) 높이를 뺀 값
            }}
          >
            <div className="container px-4">
              <Outlet />
            </div>
          </CContainer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
