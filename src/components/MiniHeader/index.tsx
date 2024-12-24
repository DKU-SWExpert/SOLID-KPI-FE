import { CHeader } from "@coreui/react";
import "@styles/custom-color.css"

const MiniHeader = () => {
  // const [_, item, list] = extractPath;
  return (
    <CHeader
      className="border-bottom bg-dawn-light text-white"
      style={{ height: "48px" }}
    >
      Home
    </CHeader>
  );
};

export default MiniHeader;
