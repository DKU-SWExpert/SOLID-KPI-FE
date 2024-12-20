import { CCard, CCardHeader } from "@coreui/react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <CCard
      textBgColor="primary"
      className="mt-4 mb-4 ms-2"
      style={{ maxWidth: "15rem" }}
    >
      <CCardHeader className="text-white">{title}</CCardHeader>
    </CCard>
  );
};

export default Title;
