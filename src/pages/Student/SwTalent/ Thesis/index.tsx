import Title from "@components/Card/Title.tsx";
import {CCard, CCardBody, CCardHeader, CFormSelect} from "@coreui/react";
import {useState} from "react";

const Thesis = () => {
    const [formData, setFormData] = useState({
        studentId: "",
        name: "",
        department: "",
        professor: "",
        selectedPeriod: "",
        uploadedFiles: {
            performanceFile: null,
            applicationFile: null,
            recommendationFile: null,
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

    return (
        <div className="container px-4">
            <Title title="논문 신청"/>

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
        </div>
    )
}

export default Thesis;
