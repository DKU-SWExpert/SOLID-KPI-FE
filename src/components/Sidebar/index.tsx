import React from "react";
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CNavGroup,
  CSidebarToggler,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import { NavItem } from "@/types/sidebar";
import { navigationConfig } from "@/config/navigation";
import SidebarItem from "@components/SidebarItem";

const Sidebar: React.FC = () => {
  const renderNavItems = (items: NavItem[]) => {
    return items.map((item, index) => {
      if (item.items) {
        return (
          <CNavGroup
            key={index}
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={item.icon} />{" "}
                {item.name}
              </>
            }
          >
            {item.items.map((subItem, subIndex) => (
              <CNavItem key={subIndex} href={subItem.href}>
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>{" "}
                {subItem.name}
              </CNavItem>
            ))}
          </CNavGroup>
        );
      }
      return <SidebarItem key={index} {...item} />;
    });
  };

  return (
    <CSidebar className="border-end" style={{ height: "100vh" }}>
      <CSidebarHeader
        className="border-bottom"
        style={{ height: "64px", backgroundColor: "#2091D0" }}
      >
        <CSidebarBrand
          style={{
            color: "#fff",
          }}
        >
          Solid KPI
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav style={{ backgroundColor: "#f8f9fa" }}>
        {Object.entries(navigationConfig).map(([title, items]) => (
          <React.Fragment key={title}>
            <CNavTitle>{title}</CNavTitle>
            {renderNavItems(items)}
          </React.Fragment>
        ))}
      </CSidebarNav>
      <CSidebarHeader className="border-top">
        <CSidebarToggler />
      </CSidebarHeader>
    </CSidebar>
  );
};

export default Sidebar;
