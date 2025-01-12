// src/pages/management/ManagerAddPage.tsx

import React, { useState } from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CFormLabel,
  CFormInput,
  CButton,
  CFormSelect,
} from '@coreui/react';
import { useManagerStore } from '@/store/useManagerStore';
import { useNavigate, useParams } from 'react-router-dom';

const ManagerAddPage: React.FC = () => {
  // 만약 URL 파라미터로 managerName을 받는 경우 (예: /management/add/:managerName)
  const { managerName } = useParams();
  // store
  const { addManager } = useManagerStore();

  // 폼 상태
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    department: '',
    tempPassword1: '',
    tempPassword2: '',
  });

  const navigate = useNavigate();

  // 공통 핸들러
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 저장 버튼
  const handleSave = () => {
    if (!formData.name) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!formData.email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (formData.tempPassword1 !== formData.tempPassword2) {
      alert('임시암호가 서로 다릅니다.');
      return;
    }

    const fullPhone = `${formData.phone1}-${formData.phone2}-${formData.phone3}`;

    // 실제론 ID를 auto-increment or UUID
    const newId = Date.now();
    addManager({
      id: newId,
      name: formData.name,
      phone: fullPhone,
      email: formData.email,
      department: formData.department,
    });

    alert('저장완료');
    // 목록 페이지로 이동 (예: /management)
    navigate('/management');
  };

  return (
    <CContainer className="py-4">
      <h4 className="mb-4 text-white">
        {managerName ? `수퍼관리자 : ${managerName}` : '관리자 추가'}
      </h4>

      <CRow className="mb-3">
        <CCol md={6}>
          <CFormLabel className="text-white">이름</CFormLabel>
          <CFormInput
            placeholder="이름을 입력해주세요..."
            className="text-white border-secondary bg-dark"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormLabel className="text-white">이메일</CFormLabel>
          <CFormInput
            placeholder="이메일을 입력해주세요..."
            className="text-white border-secondary bg-dark"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </CCol>
      </CRow>

      <CRow className="mb-3">
        <CCol md={6}>
          <CFormLabel className="text-white">핸드폰번호</CFormLabel>
          <div className="d-flex gap-2">
            <CFormSelect
              className="text-white border-secondary bg-dark"
              style={{ maxWidth: '5rem' }}
              value={formData.phone1}
              onChange={(e) => handleChange('phone1', e.target.value)}
            >
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
            </CFormSelect>
            <CFormInput
              className="text-white border-secondary bg-dark"
              style={{ maxWidth: '6rem' }}
              value={formData.phone2}
              onChange={(e) => handleChange('phone2', e.target.value)}
            />
            <CFormInput
              className="text-white border-secondary bg-dark"
              style={{ maxWidth: '6rem' }}
              value={formData.phone3}
              onChange={(e) => handleChange('phone3', e.target.value)}
            />
          </div>
        </CCol>
        <CCol md={6}>
          <CFormLabel className="text-white">소속</CFormLabel>
          <CFormInput
            placeholder="소속을 입력하세요..."
            className="text-white border-secondary bg-dark"
            value={formData.department}
            onChange={(e) => handleChange('department', e.target.value)}
          />
        </CCol>
      </CRow>

      <CRow className="mb-3">
        <CCol md={6}>
          <CFormLabel className="text-white">임시암호</CFormLabel>
          <CFormInput
            type="password"
            placeholder="임시암호를 입력하세요..."
            className="text-white border-secondary bg-dark"
            value={formData.tempPassword1}
            onChange={(e) => handleChange('tempPassword1', e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormLabel className="text-white">임시암호2</CFormLabel>
          <CFormInput
            type="password"
            placeholder="임시암호를 다시 입력하세요..."
            className="text-white border-secondary bg-dark"
            value={formData.tempPassword2}
            onChange={(e) => handleChange('tempPassword2', e.target.value)}
          />
        </CCol>
      </CRow>

      <div className="mt-4 text-center">
        <CButton color="primary" onClick={handleSave}>
          저 장
        </CButton>
      </div>
    </CContainer>
  );
};

export default ManagerAddPage;
