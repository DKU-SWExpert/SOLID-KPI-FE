import { CHeader, CContainer } from "@coreui/react";
import AvatarDropdownMenu from "@components/AvatarDropdownMenu";

const Header = () => {
  return (
    <CHeader
      className="border-bottom bg-dawn-light border-gray"
      style={{ height: "64px"}}
    >
      <CContainer fluid className="d-flex justify-content-end">
        <AvatarDropdownMenu />
      </CContainer>
    </CHeader>
  );
};

export default Header;
