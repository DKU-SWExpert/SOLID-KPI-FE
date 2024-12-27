import { useState } from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
} from "@coreui/react";

const DKUStarTrack = () => {
    const [formData, setFormData] = useState({
        studentId: "",
        name: "",
        department: "",
        selectedPeriod: "",
        professor: "",
        uploadedFiles: {
            applicationFile: null,
            recommendationFile: null,
            enrollmentProof: null,
            topcitScore: null,
        },
    });

    const periods = [
        "2025년 1학기",
        "2025년 2학기",
        "2026년 1학기",
        "2026년 2학기",
        "2027년 1학기",
        "2027년 2학기",
        "2028년 1학기",
        "2028년 2학기",
        "2029년 1학기",
        "2029년 2학기",
    ];

    const fileFields = [
        { key: "applicationFile", title: "신청서" },
        { key: "recommendationFile", title: "지도교수 추천서" },
        { key: "enrollmentProof", title: "재학증명서" },
        { key: "topcitScore", title: "TOPCIT 성적 증명서" },
    ];

    const handleFormChange = (field: string, value: string | File | null) => {
        if (field in formData.uploadedFiles) {
            setFormData((prev) => ({
                ...prev,
                uploadedFiles: {
                    ...prev.uploadedFiles,
                    [field]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }
    };

    const handleSubmit = () => {
        if (!formData.selectedPeriod) {
            alert("기간을 선택해주세요.");
            return;
        }

        for (const [key, value] of Object.entries(formData.uploadedFiles)) {
            if (!value) {
                alert(`${key}를 업로드해주세요.`);
                return;
            }
        }

        if (!formData.studentId || !formData.name || !formData.department || !formData.professor) {
            alert("모든 기본정보를 입력해주세요.");
            return;
        }

        console.log("Submitted Data:", formData);
        alert("제출이 완료되었습니다!");
    };

    return (
        <div className="container px-4">
            <div className="d-flex align-items-center mt-4 mb-4">
                <CCard
                    textBgColor="primary"
                    className="w-100 d-flex align-items-center justify-content-center"
                    style={{ maxWidth: "15rem", height: "4.5rem" }}
                >
                    <CCardHeader className="text-white text-center fw-semibold fs-5 border-0">
                        DKU StarTrack 신청
                    </CCardHeader>
                </CCard>
            </div>

            {/* 기간 선택 */}
            <CCard
                textBgColor="info"
                className="d-flex mt-4 mb-4"
                style={{ borderRadius: "0.75rem" }}
            >
                <CCardHeader className="text-white">기간</CCardHeader>
                <CCardBody
                    className="bg-dawn-light"
                    style={{
                        borderBottomLeftRadius: "0.75rem",
                        borderBottomRightRadius: "0.75rem",
                    }}
                >
                    <CFormSelect
                        className="bg-dawn-light text-white border-gray col-md-4"
                        style={{ maxWidth: "15rem" }}
                        value={formData.selectedPeriod}
                        onChange={(e) =>
                            handleFormChange("selectedPeriod", e.target.value)
                        }
                    >
                        <option value="">선택해주세요...</option>
                        {periods.map((period, index) => (
                            <option key={index} value={period}>
                                {period}
                            </option>
                        ))}
                    </CFormSelect>
                </CCardBody>
            </CCard>

            {/* 기본정보 입력 */}
            <CCard
                textBgColor="info"
                className="d-flex mt-4 mb-4"
                style={{ borderRadius: "0.75rem" }}
            >
                <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
                <CCardBody
                    className="bg-dawn-light"
                    style={{
                        borderBottomLeftRadius: "0.75rem",
                        borderBottomRightRadius: "0.75rem",
                    }}
                >
                    <CRow>
                        <CCol xs="12" md="6" lg="4">
                            <CFormLabel className="text-white">학번</CFormLabel>
                            <CFormInput
                                type="text"
                                className="mb-4 bg-dawn-light text-white border-gray gray-placeholder"
                                placeholder="20123456"
                                value={formData.studentId}
                                onChange={(e) =>
                                    handleFormChange("studentId", e.target.value)
                                }
                            />
                        </CCol>
                        <CCol xs="12" md="6" lg="4">
                            <CFormLabel className="text-white">이름</CFormLabel>
                            <CFormInput
                                type="text"
                                className="mb-4 bg-dawn-light text-white border-gray gray-placeholder"
                                placeholder="홍길동"
                                value={formData.name}
                                onChange={(e) =>
                                    handleFormChange("name", e.target.value)
                                }
                            />
                        </CCol>
                        <CCol xs="12" md="6" lg="4">
                            <CFormLabel className="text-white">학과</CFormLabel>
                            <CFormInput
                                type="text"
                                className="mb-4 bg-dawn-light text-white border-gray gray-placeholder"
                                placeholder="소프트웨어"
                                value={formData.department}
                                onChange={(e) =>
                                    handleFormChange("department", e.target.value)
                                }
                            />
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>

            {/* 파일 업로드 */}
            {fileFields.map(({ key, title }) => (
                <CCard
                    key={key}
                    textBgColor="info"
                    className="d-flex mt-4 mb-4"
                    style={{ borderRadius: "0.75rem" }}
                >
                    <CCardHeader className="text-white">{title}</CCardHeader>
                    <CCardBody
                        className="bg-dawn-light"
                        style={{
                            borderBottomLeftRadius: "0.75rem",
                            borderBottomRightRadius: "0.75rem",
                        }}
                    >
                        <CInputGroup className="mb-3">
                            <CFormInput
                                className="bg-dawn-light text-white border-gray gray-placeholder"
                                type="file"
                                onChange={(e) =>
                                    handleFormChange(
                                        key,
                                        e.target.files ? e.target.files[0] : null
                                    )
                                }
                                id={`inputGroupFile_${key}`}
                            />
                            <CInputGroupText
                                className="bg-dawn-light text-white border-gray gray-placeholder"
                                as="label"
                                htmlFor={`inputGroupFile_${key}`}
                            >
                                Upload
                            </CInputGroupText>
                        </CInputGroup>
                    </CCardBody>
                </CCard>
            ))}

            {/* 담당 교수 입력 */}
            <CCard
                textBgColor="info"
                className="d-flex mt-4 mb-4"
                style={{ borderRadius: "0.75rem" }}
            >
                <CCardHeader className="text-white">담당 교수</CCardHeader>
                <CCardBody
                    className="bg-dawn-light"
                    style={{
                        borderBottomLeftRadius: "0.75rem",
                        borderBottomRightRadius: "0.75rem",
                    }}
                >
                    <CFormInput
                        type="text"
                        className="mb-2 bg-dawn-light text-white border-gray gray-placeholder"
                        style={{ maxWidth: "15rem" }}
                        placeholder="검색어를 입력하세요"
                        value={formData.professor}
                        onChange={(e) =>
                            handleFormChange("professor", e.target.value)
                        }
                    />
                </CCardBody>
            </CCard>

            {/* 제출 버튼 */}
            <div className="mt-4 mb-4">
                <CButton color="primary" className="w-100" onClick={handleSubmit}>
                    저장
                </CButton>
            </div>
        </div>
    );
};

export default DKUStarTrack;
