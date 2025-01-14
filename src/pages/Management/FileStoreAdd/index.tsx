import {useState} from "react";
import {CButton, CCol, CContainer, CFormInput, CFormLabel,} from "@coreui/react";

const FileStoreAdd = () => {
    const [formData, setFormData] = useState({
        name: "",
        file: "",
    });

    const handleChange = (field: string, value: string | File) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        alert("저장되었습니다!");
    };

    return (
        <CContainer className="py-4">
            <CCol className="mb-4" md={6}>
                <CFormLabel className="text-white">이름</CFormLabel>
                <CFormInput
                    className="text-white border-gray bg-dark"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </CCol>
            <CCol md={6}>
                <CFormInput
                    type="file"
                    className="text-white border-gray bg-dark"
                    onChange={(e) => handleChange("file", e.target.files?.[0] || "")}
                />
            </CCol>

            <CButton
                className="mt-4 text-center"
                color="primary"
                onClick={handleSave}
                style={{width: '100%'}}
            >
                저 장
            </CButton>
        </CContainer>
    );
};

export default FileStoreAdd;
