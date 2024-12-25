import { CHeader } from "@coreui/react";
import "@styles/custom-color.css"

const MiniHeader = () => {
  // const [_, item, list] = extractPath;
  return (
    <CHeader
      className="bg-dawn-light border-bottom-gray-light text-white"
      style={{ height: "48px" }}
    >
      Home
    </CHeader>
  );
};

export default MiniHeader;
