import React from "react";
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CSidebarToggler,
} from "@coreui/react";
import { NavItem } from "@/types/sidebar";
import { navigationConfig } from "@/config/navigation";
import SidebarItem from "@components/SidebarItem";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import CIcon from "@coreui/icons-react";
import { cilPencil } from "@coreui/icons";

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
            <CNavTitle>{item.name}</CNavTitle>
            {item.items.map((subItem, subIndex) => (
              <CNavItem key={subIndex} href={subItem.href}>
                <span className="nav-icon">
                  <span className="nav-icon">
                    <CIcon icon={cilPencil} />
                  </span>
                </span>{" "}
                {subItem.name}
              </CNavItem>
            ))}
          </React.Fragment>
        );
      }
      return <SidebarItem key={index} {...item} />;
    });
  };

  // 아래 코드는 추후 백엔드까지 구현되면 삭제 후 role만 사용.
  const sidebarRole = role && navigationConfig[role] ? role : "STUDENT";

  return (
    <CSidebar className="border-end" style={{ height: "100vh" }}>
      <CSidebarHeader
        className="border-bottom"
        style={{
          height: "64px",
          backgroundColor: "#2091D0",
        }}
      >
        <CSidebarBrand
          style={{
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={onClickSidebarBrand}
        >
          Solid KPI
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav style={{ backgroundColor: "#f8f9fa" }}>
        {renderNavItems(navigationConfig[sidebarRole])}
      </CSidebarNav>
      <CSidebarHeader className="border-top">
        <CSidebarToggler />
      </CSidebarHeader>
    </CSidebar>
  );
};

export default Sidebar;
