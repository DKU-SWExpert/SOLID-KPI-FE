import {CRow, CCol, CFormInput, CFormLabel} from "@coreui/react";
import CommonCard from "@components/CommonCard";

const ApplicationForm = () => {
    return (
        <CommonCard header="신청서 (기본정보)" textBgColor="info" style={{maxWidth: "100rem"}}>
            <CRow className="text-white">
                <CCol xs="12" md="6" lg="4">
                    <CFormLabel>학번</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                        placeholder="12345678"
                        readOnly
                    />

                    <CFormLabel>생년월일</CFormLabel>
                    <CFormInput type="date" className="mb-4 bg-dawn text-white border-gray"/>

                    <CFormLabel>이메일</CFormLabel>
                    <CFormInput type="text" className="bg-dawn text-white border-gray"/>
                </CCol>

                <CCol xs="12" md="6" lg="4">
                    <CFormLabel>이름</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                        placeholder="홍길동"
                        readOnly
                    />

                    <CFormLabel>학년</CFormLabel>
                    <CFormInput type="text" className="mb-4 bg-dawn text-white border-gray gray-placeholder"/>
                </CCol>

                <CCol xs="12" md="12" lg="4">
                    <CFormLabel>학과</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                        placeholder="소프트웨어"
                        readOnly
                    />

                    <CFormLabel>휴대폰</CFormLabel>
                    <CFormInput type="text" className="mb-4 bg-dawn text-white border-gray gray-placeholder"/>

                    <CFormLabel>TOPCIT ID</CFormLabel>
                    <CFormInput type="text" className="mb-4 bg-dawn text-white border-gray gray-placeholder"/>
                </CCol>
            </CRow>
        </CommonCard>
    );
};

export default ApplicationForm;
