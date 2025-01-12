import React, { useState } from "react";
import { CRow, CCol, CFormInput, CButton } from "@coreui/react";

interface ExpandedRowProps {
  manager: {
    id: number;
    name: string;
    phone: string;
    email: string;
    department: string;
  };
  onSave: (updatedManager: { phone: string; department: string }) => void;
  onDelete: () => void;
}

const ExpandedRow: React.FC<ExpandedRowProps> = ({ manager, onSave, onDelete }) => {
  const [phone, setPhone] = useState(manager.phone);
  const [department, setDepartment] = useState(manager.department);

  const handleSave = () => {
    onSave({ phone, department });
  };

  return (
    <tr>
      <td colSpan={5}>
        <div
          style={{
            padding: "1rem",
            background: "",
            border: "1px solid #6a0dad",
            borderRadius: "8px",
          }}
        >
          <CRow className="mb-3">
            <CCol md={3}>
              <label>이름</label>
              <CFormInput
                value={manager.name}
                readOnly
                className="bg-dark text-white border-secondary"
              />
            </CCol>
            <CCol md={3}>
              <label>전화번호</label>
              <CFormInput
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-dark text-white border-secondary"
              />
            </CCol>
            <CCol md={3}>
              <label>E-mail</label>
              <CFormInput
                value={manager.email}
                readOnly
                className="bg-dark text-white border-secondary"
              />
            </CCol>
            <CCol md={3}>
              <label>소속</label>
              <CFormInput
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="bg-dark text-white border-secondary"
              />
            </CCol>
          </CRow>
          <div className="d-flex justify-content-end gap-2">
            <CButton color="primary" onClick={handleSave}>
              저장
            </CButton>
            <CButton color="secondary" onClick={onDelete}>
              삭제
            </CButton>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ExpandedRow;
