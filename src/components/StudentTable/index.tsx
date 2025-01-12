import React, {useState} from 'react';
import {
    CButton,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CFormInput,
} from '@coreui/react';
import {useStudentStore} from '@/store/studentStore';

interface StudentTableProps {
    currentPage: number;
    itemsPerPage: number;
}

const StudentTable: React.FC<StudentTableProps> = ({currentPage, itemsPerPage}) => {
    const {data, search} = useStudentStore();
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [editedName, setEditedName] = useState('');
    const [editedMajor, setEditedMajor] = useState('');

    // 검색된 데이터 필터링
    const filteredData = data.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    // 현재 페이지에 맞는 데이터 가져오기
    const currentItems = filteredData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    // 선택된 항목 클릭 시 이벤트 처리
    const handleRowClick = (id: number, name: string, major: string) => {
        setSelectedId((prev) => (prev === id ? null : id));
        setEditedName(name);
        setEditedMajor(major);
    };

    // 저장 버튼 클릭 시 이벤트 처리
    const handleSave = (id: number) => {
        alert(`학생 ID ${id} 저장됨: 이름 - ${editedName}, 학과 - ${editedMajor}`);
    };

    return (
        <CTable striped hover>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell>번호</CTableHeaderCell>
                    <CTableHeaderCell>학번</CTableHeaderCell>
                    <CTableHeaderCell>이름</CTableHeaderCell>
                    <CTableHeaderCell>학년</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {currentItems.map(({id, studentId, name, grade, major}) => (
                    <React.Fragment key={id}>
                        <CTableRow
                            onClick={() => handleRowClick(id, name, major)}
                            style={{cursor: 'pointer'}}
                        >
                            <CTableDataCell>{id}</CTableDataCell>
                            <CTableDataCell>{studentId}</CTableDataCell>
                            <CTableDataCell>{name}</CTableDataCell>
                            <CTableDataCell>{grade}</CTableDataCell>
                        </CTableRow>

                        {/* 선택된 항목의 세부 정보 표시 */}
                        {selectedId === id && (
                            <CTableRow>
                                <CTableDataCell colSpan={4}>
                                    <div
                                        style={{
                                            padding: '16px',
                                            border: '1px solid #ccc',
                                            borderRadius: '8px',
                                            backgroundColor: '#f8f9fa',
                                        }}
                                    >
                                        {/* 학번 필드 */}
                                        <div style={{marginBottom: '12px'}}>
                                            <label>학번</label>
                                            <CFormInput
                                                type="text"
                                                value={studentId}
                                                readOnly
                                                style={{
                                                    backgroundColor: '#e9ecef',
                                                    color: '#495057',
                                                }}
                                            />
                                        </div>

                                        {/* 이름 입력 필드 */}
                                        <div style={{marginBottom: '12px'}}>
                                            <label>이름</label>
                                            <CFormInput
                                                type="text"
                                                value={editedName}
                                                onChange={(e) => setEditedName(e.target.value)}
                                                placeholder="이름을 입력하세요"
                                            />
                                        </div>

                                        {/* 학과 입력 필드 */}
                                        <div style={{marginBottom: '12px'}}>
                                            <label>학과</label>
                                            <CFormInput
                                                type="text"
                                                value={editedMajor}
                                                onChange={(e) => setEditedMajor(e.target.value)}
                                                placeholder="학과를 입력하세요"
                                            />
                                        </div>

                                        {/* 저장 버튼 */}
                                        <CButton
                                            color="primary"
                                            onClick={() => handleSave(id)}
                                            style={{
                                                display: 'inline-block',
                                                marginRight: '8px',
                                            }}
                                        >
                                            저장
                                        </CButton>

                                        {/* 삭제 버튼 */}
                                        <CButton
                                            color="danger"
                                            onClick={() => alert(`학생 ID ${id} 삭제됨.`)}
                                        >
                                            삭제
                                        </CButton>
                                    </div>
                                </CTableDataCell>
                            </CTableRow>
                        )}
                    </React.Fragment>
                ))}
            </CTableBody>
        </CTable>
    );
};

export default StudentTable;
