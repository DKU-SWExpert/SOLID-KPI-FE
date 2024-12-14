import React from "react";
import { CNavItem } from "@coreui/react";
import { CIcon } from "@coreui/icons-react";

interface NavItemProps {
  name: string;
  icon?: any;
  href?: string;
}

const SidebarItem: React.FC<NavItemProps> = ({ name, icon, href }) => (
  <CNavItem href={href}>
    {icon && <CIcon customClassName="nav-icon" icon={icon} />} {name}
  </CNavItem>
);

export default SidebarItem;
