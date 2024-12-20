import { CHeader } from "@coreui/react";

const MiniHeader = () => {
  // const [_, item, list] = extractPath;
  return (
    <CHeader
      className="border-bottom"
      style={{ height: "48px", backgroundColor: "#f8f9fa" }}
    >
      Home
    </CHeader>
  );
};

export default MiniHeader;
