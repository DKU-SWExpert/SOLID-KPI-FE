import React from "react";
import { Link } from "react-router-dom";
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CSidebarToggler,
} from "@coreui/react";
import { NavItem } from "@/types/sidebar";
import { navigationConfig } from "@/config/navigation";
import SidebarItem from "@components/SidebarItem";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";
import { STUDENT } from "@/constants/role";
import "@styles/custom-color.css";

const Sidebar = () => {
  const { role } = useAuthStore();
  let navigate = useNavigate();

  const onClickSidebarBrand = () => {
    navigate("/");
  };

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item, index) => {
      if (item.items) {
        return (
          <React.Fragment key={index}>
            <CNavTitle className="text-white">{item.name}</CNavTitle>
            {item.items.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                to={subItem.path || "#"}
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="nav-icon">
                  <CIcon className="text-white" icon={cilPencil} />
                </span>
                {subItem.name}
              </Link>
            ))}
          </React.Fragment>
        );
      }
      return <SidebarItem key={index} {...item} />;
    });
  };

  // 아래 코드는 추후 백엔드까지 구현되면 삭제 후 role만 사용.
  const sidebarRole = role && navigationConfig[role] ? role : STUDENT;

  return (
    <CSidebar className="border-end" style={{ height: "100vh" }}>
      <CSidebarHeader
        className="border-bottom bg-dawn-light"
        style={{
          height: "64px"
        }}
      >
        <CSidebarBrand
          style={{
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={onClickSidebarBrand}
        >
          SOLID KPI
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav className="bg-dawn-light text-white">
        {renderNavItems(navigationConfig[sidebarRole])}
      </CSidebarNav>
      <CSidebarHeader className="border-top">
        <CSidebarToggler/>
      </CSidebarHeader>
    </CSidebar>
  );
};

export default Sidebar;
