import React, {useState} from "react";
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

const PeriodSelectCard = ({
                              title,
                              onPeriodSelect,
                          }: {
    title: string;
    onPeriodSelect: (period: string) => void;
}) => {
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

    const [selectedPeriod, setSelectedPeriod] = useState("");

    const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelectedPeriod(selectedValue);
        onPeriodSelect(selectedValue);
    };

    return (
        <CCard
            textBgColor="info"
            className="d-flex mt-4 mb-4"
            style={{borderRadius: "0.75rem"}}
        >
            <CCardHeader className="text-white">{title}</CCardHeader>
            <CCardBody
                className="bg-dawn"
                style={{
                    borderBottomLeftRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                }}
            >
                <CFormSelect
                    className="bg-dawn text-white border-gray col-md-4"
                    style={{maxWidth: "15rem"}}
                    value={selectedPeriod}
                    onChange={handlePeriodChange}
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
    );
};

const UploadFileForm = ({
                            title,
                            onFileUpload,
                        }: {
    title: string;
    onFileUpload: (file: File | null) => void;
}) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onFileUpload(file);
    };

    return (
        <CCard
            textBgColor="info"
            className="d-flex mt-4 mb-4"
            style={{borderRadius: "0.75rem"}}
        >
            <CCardHeader className="text-white">{title}</CCardHeader>
            <CCardBody
                className="bg-dawn"
                style={{
                    borderBottomLeftRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                }}
            >
                <CInputGroup className="bg-dawn mb-3">
                    <CFormInput
                        className="bg-dawn text-white border-gray gray-placeholder"
                        type="file"
                        onChange={handleFileChange}
                        id="inputGroupFile02"
                    />
                    <CInputGroupText
                        className="bg-dawn text-white border-gray gray-placeholder"
                        as="label"
                        htmlFor="inputGroupFile02"
                    >
                        Upload
                    </CInputGroupText>
                </CInputGroup>
            </CCardBody>
        </CCard>
    );
};

const BasicInfoForm = ({
                           formData,
                           onFormChange,
                       }: {
    formData: { studentId: string; name: string; department: string };
    onFormChange: (field: string, value: string) => void;
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        onFormChange(name, value);
    };

    return (
        <CCard
            textBgColor="info"
            className="d-flex mt-4 mb-4"
            style={{borderRadius: "0.75rem"}}
        >
            <CCardHeader className="text-white">신청서 (기본정보)</CCardHeader>
            <CCardBody
                className="bg-dawn"
                style={{
                    borderBottomLeftRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                }}
            >
                <CRow>
                    <CCol xs="12" md="6" lg="4">
                        <div className="text-white">
                            <CFormLabel>학번</CFormLabel>
                            <CFormInput
                                type="text"
                                className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                placeholder="20123456"
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleChange}
                            />
                        </div>
                    </CCol>
                    <CCol xs="12" md="6" lg="4">
                        <div className="text-white">
                            <CFormLabel>이름</CFormLabel>
                            <CFormInput
                                type="text"
                                className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                placeholder="홍길동"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </CCol>
                    <CCol xs="12" md="6" lg="4">
                        <div className="text-white">
                            <CFormLabel>학과</CFormLabel>
                            <CFormInput
                                type="text"
                                className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                                placeholder="소프트웨어"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                            />
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

const ProfessorSearch = ({
                             title,
                             onSearch,
                         }: {
    title: string;
    onSearch: (professor: string) => void;
}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value);
    };

    return (
        <CCard
            textBgColor="info"
            className="d-flex mt-4 mb-4"
            style={{borderRadius: "0.75rem"}}
        >
            <CCardHeader className="text-white">{title}</CCardHeader>
            <CCardBody
                className="bg-dawn"
                style={{
                    borderBottomLeftRadius: "0.75rem",
                    borderBottomRightRadius: "0.75rem",
                }}
            >
                <CFormInput
                    type="text"
                    className="mb-2 bg-dawn text-white border-gray gray-placeholder"
                    style={{maxWidth: "15rem"}}
                    placeholder="검색어를 입력하세요"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </CCardBody>
        </CCard>
    );
};

const SwSupport = () => {
    const [formData, setFormData] = useState({
        studentId: "",
        name: "",
        department: "",
        professor: "",
        selectedPeriod: "",
        uploadedFiles: {
            performanceFile: null,
            applicationFile: null,
            enrollmentProof: null,
            topcitScore: null,
        },
    });

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

    const handleSave = () => {
        if (!formData.selectedPeriod) {
            alert("기간을 선택해주세요.");
            return;
        }
        if (!formData.uploadedFiles.performanceFile) {
            alert("수행평가서를 업로드해주세요.");
            return;
        }
        if (!formData.uploadedFiles.applicationFile) {
            alert("신청서를 업로드해주세요.");
            return;
        }
        if (!formData.uploadedFiles.enrollmentProof) {
            alert("재학증명서를 업로드해주세요.");
            return;
        }
        if (!formData.uploadedFiles.topcitScore) {
            alert("TOPCIT 성적 증명서를 업로드해주세요.");
            return;
        }
        if (!formData.studentId || !formData.name || !formData.department) {
            alert("모든 기본정보를 입력해주세요.");
            return;
        }
        if (!formData.professor) {
            alert("담당 교수를 입력해주세요.");
            return;
        }

        console.log("Saved Data:", formData);
        // 서버로 데이터 전송 또는 저장 로직 추가
    };

    return (
        <div className="container px-4">
            <TitleCard title="SW 서포터즈 신청"/>

            <PeriodSelectCard
                title="기간"
                onPeriodSelect={(value) => handleFormChange("selectedPeriod", value)}
            />

            <UploadFileForm
                title="수행평가서"
                onFileUpload={(file) => handleFormChange("performanceFile", file)}
            />

            <UploadFileForm
                title="신청서"
                onFileUpload={(file) => handleFormChange("applicationFile", file)}
            />

            <UploadFileForm
                title="재학증명서"
                onFileUpload={(file) => handleFormChange("enrollmentProof", file)}
            />

            <UploadFileForm
                title="TOPCIT 성적 증명서"
                onFileUpload={(file) => handleFormChange("topcitScore", file)}
            />

            <BasicInfoForm
                formData={formData}
                onFormChange={(field, value) => handleFormChange(field, value)}
            />

            <ProfessorSearch
                title="담당 교수"
                onSearch={(value) => handleFormChange("professor", value)}
            />

            <div className="mt-4 mb-5">
                <CButton color="primary" className="w-100" onClick={handleSave}>
                    저 장
                </CButton>
            </div>
        </div>
    );
};

export default SwSupport;
