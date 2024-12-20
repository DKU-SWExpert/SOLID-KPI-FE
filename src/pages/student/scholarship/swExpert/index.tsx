import {CCard, CCardBody, CCardHeader, CFormSelect} from "@coreui/react";

const SwExpert = () => {
    return (
        <div className="container px-4">
            {/* title */}
            <div className="d-flex align-items-center mt-4 mb-4">
                <CCard
                    textBgColor="primary"
                    className="w-100 d-flex align-items-center justify-content-center"
                    style={{maxWidth: "15rem", height: "4.5rem"}}
                >
                    <CCardHeader className="text-white text-center fw-semibold fs-5">
                        SW Expert 신청
                    </CCardHeader>
                </CCard>
            </div>
            {/* 기간 */}
            <CCard textBgColor="info" className="mt-4 mb-4">
                <CCardHeader className="text-white">기간</CCardHeader>
                <CCardBody className="bg-dawn">
                    <CFormSelect className="bg-dawn text-white border-gray col-md-4" style={{maxWidth: "15rem"}}>
                        <option>선택해주세요...</option>
                        <option>2025년 1학기</option>
                        <option>2025년 2학기</option>
                        <option>2026년 1학기</option>
                        <option>2026년 2학기</option>
                        <option>2027년 1학기</option>
                        <option>2027년 2학기</option>
                        <option>2028년 1학기</option>
                        <option>2028년 2학기</option>
                        <option>2029년 1학기</option>
                        <option>2029년 2학기</option>
                    </CFormSelect>
                </CCardBody>
            </CCard>
            {/* 수행평가서 */}
            <div className="row">

            </div>
            {/* 신청서 (기본정보) */}
            <div className="row">

            </div>
            {/* 신청서 */}
            <div className="row">

            </div>
            {/* 지도교수 추천서 */}
            <div className="row">

            </div>
            {/* 재학증명서 */}
            <div className="row">

            </div>
            {/* TOPCIT 성적 증명서 */}
            <div className="row">

            </div>
            {/* 담당 교수 */}
            <div className="row">

            </div>
        </div>
    );
};

export default SwExpert;
