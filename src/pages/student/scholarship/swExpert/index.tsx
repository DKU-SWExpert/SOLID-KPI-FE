import {CCard, CCardBody, CCardHeader, CFormInput, CFormSelect} from "@coreui/react";
import React from "react";

interface TitleCardProps {
    title: string;
}

const TitleCard = ({title}: TitleCardProps) => {
    return (
        <div className="d-flex align-items-center mt-4 mb-4">
            <CCard
                textBgColor="primary"
                className="w-100 d-flex align-items-center justify-content-center"
                style={{maxWidth: "15rem", height: "4.5rem"}}
            >
                <CCardHeader className="text-white text-center fw-semibold fs-5">
                    {title}
                </CCardHeader>
            </CCard>
        </div>
    );
};

const PeriodSelectCard = ({title}: TitleCardProps) => {
    return (
        <CCard textBgColor="info" className="d-flex mt-4 mb-4" style={{borderRadius: "0.75rem"}}>
            <CCardHeader className="text-white">{title}</CCardHeader>
            <CCardBody className="bg-dawn"
                       style={{borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem"}}>
                <CFormSelect
                    className="bg-dawn text-white border-gray col-md-4"
                    style={{maxWidth: "15rem"}}
                >
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
    );
};

// Main Component
const SwExpert = () => {
    return (
        <div className="container px-4">
            {/* Title */}
            <TitleCard title="SW Expert 신청"/>
            {/* 기간 */}
            <PeriodSelectCard title="기간"/>

            {/* 수행평가서 */}
            <CCard textBgColor="info" className="d-flex mt-4 mb-4" style={{borderRadius: "0.75rem"}}>
                <CCardHeader className="text-white">수행평가서</CCardHeader>
                <CCardBody className="bg-dawn"
                           style={{borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem"}}>
                    <div className="mb-3">
                        <CFormInput type="file" id="formFile"/>
                    </div>
                </CCardBody>
            </CCard>

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
