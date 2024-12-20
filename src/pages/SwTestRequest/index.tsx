import {CButton, CCard, CCardBody, CCardHeader, CFormInput, CFormSelect} from "@coreui/react";

const SwTestRequest = () => {
    return (
        <>
            <CCard textBgColor="primary" className="mt-4 mb-4 ms-2" style={{maxWidth: "15rem"}}>
                <CCardHeader className="text-white">SW 역량 테스트 신청</CCardHeader>
            </CCard>

            <CCard textBgColor="info" className="mt-4 mb-4 ms-2 me-2" style={{maxWidth: "100rem"}}>
                <CCardHeader className="text-white">시험 구분</CCardHeader>
                <CCardBody className="bg-dawn">
                    <CFormSelect className="bg-dawn text-white border-gray" style={{maxWidth: "15rem"}}>
                        <option>시험 선택</option>
                        <option value="topcit">TOPCIT</option>
                        <option value="pccp">PCCP</option>
                        <option value="pcce">PCCE</option>
                    </CFormSelect>
                </CCardBody>
            </CCard>

            <CCard textBgColor="info" className="mt-4 mb-4 ms-2 me-2" style={{maxWidth: "100rem"}}>
                <CCardHeader className="text-white">시험 일자</CCardHeader>
                <CCardBody className="bg-dawn">
                    <CFormInput
                        type="date"
                        className="bg-dawn text-white border-gray"
                        style={{maxWidth: "15rem"}}
                    />
                </CCardBody>
            </CCard>

            <CCard textBgColor="info" className="mt-4 mb-4 ms-2 me-2" style={{maxWidth: "100rem"}}>
                <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
                <CCardBody className="bg-dawn">

                </CCardBody>
            </CCard>

            <CCard className="mt-5 mb-4 ms-2 me-2">
                <CButton color="primary">저 장</CButton>
            </CCard>
        </>
    )
}

export default SwTestRequest;
