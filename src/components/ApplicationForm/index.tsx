import CommonCard from "@components/CommonCard";
import {CCol, CFormInput, CFormLabel, CRow} from "@coreui/react";

interface ApplicationFormProps {
    value: {
        studentId: string;
        birthDate: string;
        email: string;
        name: string;
        grade: string;
        department: string;
        phone: string;
        topcitId: string;
    };
    onChange: (field: keyof ApplicationFormProps["value"], value: string) => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ value, onChange }) => {
    return (
        <CommonCard header="신청서 (기본정보)" textBgColor="info" style={{ maxWidth: "100rem" }}>
            <CRow className="text-white">
                <CCol xs="12" md="6" lg="4">
                    <CFormLabel>학번</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                        placeholder="12345678"
                        value={value.studentId}
                        onChange={(e) => onChange("studentId", e.target.value)}
                        readOnly
                    />

                    <CFormLabel>생년월일</CFormLabel>
                    <CFormInput
                        type="date"
                        className="mb-4 bg-dawn text-white border-gray"
                        value={value.birthDate}
                        onChange={(e) => onChange("birthDate", e.target.value)}
                    />

                    <CFormLabel>이메일</CFormLabel>
                    <CFormInput
                        type="email"
                        className="bg-dawn text-white border-gray"
                        value={value.email}
                        onChange={(e) => onChange("email", e.target.value)}
                    />
                </CCol>

                <CCol xs="12" md="6" lg="4">
                    <CFormLabel>이름</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                        placeholder="홍길동"
                        value={value.name}
                        onChange={(e) => onChange("name", e.target.value)}
                        readOnly
                    />

                    <CFormLabel>학년</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray"
                        value={value.grade}
                        onChange={(e) => onChange("grade", e.target.value)}
                    />
                </CCol>

                <CCol xs="12" md="12" lg="4">
                    <CFormLabel>학과</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray gray-placeholder"
                        placeholder="소프트웨어"
                        value={value.department}
                        onChange={(e) => onChange("department", e.target.value)}
                        readOnly
                    />

                    <CFormLabel>휴대폰</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray"
                        value={value.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                    />

                    <CFormLabel>TOPCIT ID</CFormLabel>
                    <CFormInput
                        type="text"
                        className="mb-4 bg-dawn text-white border-gray"
                        value={value.topcitId}
                        onChange={(e) => onChange("topcitId", e.target.value)}
                    />
                </CCol>
            </CRow>
        </CommonCard>
    );
};

export default ApplicationForm;
