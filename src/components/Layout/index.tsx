import { ReactNode } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { CContainer } from "@coreui/react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="c-app">
      <div className="c-wrapper d-flex">
        <Sidebar />
        <div className="c-body flex-grow-1">
          <Header />
          <main className="c-main">
            <CContainer fluid>{children}</CContainer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
