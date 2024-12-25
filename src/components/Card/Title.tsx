import { CCard, CCardHeader } from "@coreui/react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="d-flex align-items-center mt-4 mb-4">
      <CCard
        textBgColor="primary"
        className="w-100 d-flex align-items-center justify-content-center"
        style={{ maxWidth: "15rem", height: "4.5rem" }}
      >
        <CCardHeader className="text-white text-center fw-semibold fs-5 border-0">
          {title}
        </CCardHeader>
      </CCard>
    </div>
  );
};

export default Title;
