import {CButton, CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormLabel, CFormSelect, CRow} from "@coreui/react";

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
                    <CRow>
                        <CCol xs="12" md="6" lg="4">
                            <div className="text-white">
                                <CFormLabel>
                                    학번
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                    placeholder="12345678"
                                    readOnly
                                />
                            </div>

                            <div className="text-white">
                                <CFormLabel>
                                    생년월일
                                </CFormLabel>
                                <CFormInput
                                    type="date"
                                    className="mb-4 bg-dawn text-white border-gray"
                                />
                            </div>

                            <div className="text-white">
                                <CFormLabel>
                                    이메일
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="bg-dawn text-white border-gray"
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
                                    readOnly
                                />

                                <CFormLabel>
                                    학년
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                />
                            </div>
                        </CCol>
                        <CCol xs="12" md="12" lg="4">
                            <div className="text-white">
                                <CFormLabel>
                                    학과
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                    placeholder="소프트웨어"
                                    readOnly
                                />

                                <CFormLabel>
                                    휴대폰
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                />

                                <CFormLabel>
                                    TOPCIT ID
                                </CFormLabel>
                                <CFormInput
                                    type="text"
                                    className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                />
                            </div>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>

            <CCard className="mt-5 mb-4 ms-2 me-2">
                <CButton color="primary">저 장</CButton>
            </CCard>
        </>
    )
}

export default SwTestRequest;
