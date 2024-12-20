import {CCard, CCardBody, CCardHeader, CFormSelect} from "@coreui/react";

const SwTestRequest = () => {
    return (
        <>
            <CCard textBgColor="primary" className="mt-4 mb-4 ms-2" style={{maxWidth: "15rem"}}>
                <CCardHeader className="text-white">SW 역량 테스트 신청</CCardHeader>
            </CCard>

            <CCard textBgColor="info" className="mt-4 mb-4 ms-2" style={{maxWidth: "100rem"}}>
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
        </>
    )
}

export default SwTestRequest;
