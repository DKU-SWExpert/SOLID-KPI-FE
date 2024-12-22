import {
    CButton,
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
import React, {useState} from "react";

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

const PeriodSelectCard = ({title, onPeriodSelect}: { title: string; onPeriodSelect?: (period: string) => void }) => {
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
        if (onPeriodSelect) {
            onPeriodSelect(selectedValue);
        }
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


const UploadFileForm = ({title}: TitleCardProps) => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setUploadedFile(file);
    };

    const handleSubmit = () => {
        if (uploadedFile) {
            console.log("Uploading file:", uploadedFile);
            // API 요청
        } else {
            console.log("No file selected.");
        }
    };

    return (
        <CCard textBgColor="info" className="d-flex mt-4 mb-4" style={{borderRadius: "0.75rem"}}>
            <CCardHeader className="text-white">{title}</CCardHeader>
            <CCardBody className="bg-dawn"
                       style={{borderBottomLeftRadius: "0.75rem", borderBottomRightRadius: "0.75rem"}}>
                <CInputGroup className="bg-dawn mb-3"> {/*TODO: 파일선택 버튼 배경색 안바뀜 */}
                    <CFormInput className="bg-dawn text-white border-gray gray-placeholder" type="file"
                                onChange={handleFileChange} id="inputGroupFile02"/>
                    <CInputGroupText className="bg-dawn text-white border-gray gray-placeholder" as="label"
                                     onClick={handleSubmit}
                                     htmlFor="inputGroupFile02">Upload</CInputGroupText>
                </CInputGroup>
            </CCardBody>
        </CCard>
    )
}

const BasicInfoForm = () => {
    const [formValues, setFormValues] = useState({
        studentId: "",
        name: "",
        department: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
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
                                value={formValues.studentId}
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
                                value={formValues.name}
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
                                value={formValues.department}
                                onChange={handleChange}
                            />
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

const ProfessorSearch = ({title}: TitleCardProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
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

const SubmitForm = () => {
    const handleSubmit = () => {
        console.log();
    };

    return (
        <div className="mt-4 mb-5">
            <CButton color="primary" className="w-100" onClick={handleSubmit}>
                저 장
            </CButton>
        </div>
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
            <BasicInfoForm/>

            {/* 신청서 */}
            <UploadFileForm title="신청서"/>

            {/* 지도교수 추천서 */}
            <UploadFileForm title="지도교수 추천서"/>

            {/* 재학증명서 */}
            <UploadFileForm title="재학증명서"/>

            {/* TOPCIT 성적 증명서 */}
            <UploadFileForm title="TOPCIT 성적 증명서"/>

            {/* 담당 교수 */}
            <ProfessorSearch title="담당 교수"/>

            {/* 저장 */}
            <SubmitForm/>
        </div>
    );
};

export default SwExpert;
