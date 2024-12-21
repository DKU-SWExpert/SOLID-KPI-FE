import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CInputGroup, CInputGroupText,
    CRow
} from "@coreui/react";
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


const UploadFileForm = ({title}: TitleCardProps) => {
    {/*TODO: 배경색 */
    }
    return (
        <CCard textBgColor="info" className="d-flex mt-4 mb-4" style={{borderRadius: "0.75rem"}}>
            <CCardHeader className="text-white">{title}</CCardHeader>
            <CCardBody className="bg-dawn"
                       style={{borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem"}}>
                <CInputGroup className="bg-dawn mb-3">
                    <CFormInput type="file" id="inputGroupFile02"/>
                    <CInputGroupText as="label" htmlFor="inputGroupFile02">Upload</CInputGroupText>
                </CInputGroup>
            </CCardBody>
        </CCard>
    )
}

// Main Component
const SwExpert = () => {
    return (
        <div className="container px-4">
            {/* Title */}
            <TitleCard title="SW Expert 신청"/>
            {/* 기간 */}
            <PeriodSelectCard title="기간"/>

            {/* 수행평가서 */}
            <UploadFileForm title="수행평가서"/>

            {/* 신청서 (기본정보) */}
            {/*TODO: 값을 어떻게 넘겨줄지 */}
            <CCard textBgColor="info" className="d-flex mt-4 mb-4" style={{borderRadius: "0.75rem"}}>
                <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
                <CCardBody className="bg-dawn"
                           style={{borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem"}}>
                    <CRow>
                        <CCol xs="12" md="6" lg="4">
                            <div className="text-white">
                                <CFormLabel>
                                    학번
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                    placeholder="20123456"
                                />
                            </div>
                        </CCol>
                        <CCol xs="12" md="6" lg="4">
                            <div className="text-white">
                                <CFormLabel>
                                    이름
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                    placeholder="홍길동"
                                />
                            </div>
                        </CCol>
                        <CCol xs="12" md="6" lg="4">
                            <div className="text-white">
                                <CFormLabel>
                                    학과
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                    placeholder="소프트웨어"
                                />
                            </div>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>

            {/* 신청서 */}
            <UploadFileForm title="신청서"/>

            {/* 지도교수 추천서 */}
            <UploadFileForm title="지도교수 추천서"/>

            {/* 재학증명서 */}
            <UploadFileForm title="재학증명서"/>

            {/* TOPCIT 성적 증명서 */}
            <UploadFileForm title="TOPCIT 성적 증명서"/>

            {/* 담당 교수 */}
            <div className="row">

            </div>
        </div>
    );
};

export default SwExpert;
