import { CHeader, CContainer } from "@coreui/react";
import AvatarDropdownMenu from "@components/AvatarDropdownMenu";

const Header = () => {
  return (
    <CHeader
      className="border-bottom"
      style={{ height: "64px", backgroundColor: "#f8f9fa" }}
    >
      <CContainer fluid className="d-flex justify-content-end">
        <AvatarDropdownMenu />
      </CContainer>
    </CHeader>
  );
};

export default Header;
