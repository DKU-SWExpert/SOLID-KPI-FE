import {useState} from 'react';
import {
    CButton,
    CCol,
    CContainer,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFormInput,
    CFormLabel,
    CPagination,
    CPaginationItem,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react';

interface Professor {
    id: number;
    professorNumber: string;
    name: string;
    department: string;
}

const dummyData: Professor[] = Array.from({length: 25}, (_, i) => ({
    id: i + 1,
    professorNumber: '011234567',
    name: '홍길동',
    department: i % 3 === 0 ? '문과대학' : i % 3 === 1 ? '법과대학' : '공과대학',
}));

const ProfessorManagement = () => {
    const [professors, setProfessors] = useState<Professor[]>(dummyData);
    const [selectedProfessorId, setSelectedProfessorId] = useState<number | null>(null);
    const [editData, setEditData] = useState<Professor | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchCriteria, setSearchCriteria] = useState<string>('이름');
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const itemsPerPage = 15;

    const handleRowClick = (professor: Professor) => {
        if (selectedProfessorId === professor.id) {
            setSelectedProfessorId(null);
            setEditData(null);
        } else {
            setSelectedProfessorId(professor.id);
            setEditData({...professor});
        }
    };

    const handleUpdateField = (field: keyof Professor, value: string) => {
        setEditData((prev) => (prev ? {...prev, [field]: value} : null));
    };

    const handleSave = () => {
        if (editData) {
            setProfessors((prev) =>
                prev.map((prof) => (prof.id === editData.id ? {...editData} : prof))
            );
            setSelectedProfessorId(null);
        }
    };

    const handleDelete = () => {
        if (editData) {
            setProfessors((prev) => prev.filter((prof) => prof.id !== editData.id));
            setSelectedProfessorId(null);
        }
    };

    const filteredProfessors = professors.filter((prof) => {
        if (searchCriteria === '학과') {
            return prof.department.includes(searchKeyword);
        } else if (searchCriteria === '이름') {
            return prof.name.includes(searchKeyword);
        }
        return true;
    });

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedData = filteredProfessors.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const totalPages = Math.ceil(filteredProfessors.length / itemsPerPage);

    return (
        <CContainer className="py-4">
            <CRow className="mb-3 align-items-center">
                <CCol sm={2}>
                    <CDropdown >
                        <CDropdownToggle color="dark" >
                            {searchCriteria}
                        </CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem onClick={() => setSearchCriteria('학과')}>학과</CDropdownItem>
                            <CDropdownItem onClick={() => setSearchCriteria('이름')}>이름</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </CCol>
                <CCol sm={8}>
                    <CFormInput
                        placeholder={`검색어를 입력해주세요 (${searchCriteria})`}
                        className="bg-dark border-gray text-white"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                </CCol>
                <CCol sm={2}>
                    <CButton
                        className="btn btn-outline-success"
                        onClick={() => {
                            setCurrentPage(0);
                        }}
                    >
                        Search
                    </CButton>
                </CCol>
            </CRow>

            <CTable className="bg-dark text-white" striped hover style={{ backgroundColor: '#000', color: '#fff' }} >
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell>번호</CTableHeaderCell>
                        <CTableHeaderCell>교수번호</CTableHeaderCell>
                        <CTableHeaderCell>이름</CTableHeaderCell>
                        <CTableHeaderCell>학과</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {paginatedData.map(({id, professorNumber, name, department}) => (
                        <>
                            <CTableRow
                                key={id}
                                onClick={() => handleRowClick({id, professorNumber, name, department})}
                                style={{cursor: 'pointer'}}
                            >
                                <CTableDataCell>{id}</CTableDataCell>
                                <CTableDataCell>{professorNumber}</CTableDataCell>
                                <CTableDataCell>{name}</CTableDataCell>
                                <CTableDataCell>{department}</CTableDataCell>
                            </CTableRow>

                            {selectedProfessorId === id && editData && (
                                <CTableRow>
                                    <CTableDataCell className="bg-dawn-light" colSpan={4}>
                                        <div className="bg-dawn-light"
                                             style={{
                                                 border: '1px solid #6261cc',
                                                 padding: '30px',
                                                 margin: '30px',
                                                 color: '#fff',
                                             }}
                                        >
                                            <CRow className="mb-3">
                                                <CCol sm={4}>
                                                    <CFormLabel>교수번호</CFormLabel>
                                                    <CFormInput
                                                        type="text"
                                                        value={editData.professorNumber}
                                                        onChange={(e) => handleUpdateField('professorNumber', e.target.value)}
                                                        className="bg-dawn-light border-gray text-white"
                                                        readOnly
                                                    />
                                                </CCol>
                                                <CCol sm={4}>
                                                    <CFormLabel>이름</CFormLabel>
                                                    <CFormInput
                                                        type="text"
                                                        value={editData.name}
                                                        onChange={(e) => handleUpdateField('name', e.target.value)}
                                                        className="bg-dark border-gray text-white"
                                                    />
                                                </CCol>
                                                <CCol sm={4}>
                                                    <CFormLabel>학과</CFormLabel>
                                                    <CFormInput
                                                        type="text"
                                                        value={editData.department}
                                                        onChange={(e) => handleUpdateField('department', e.target.value)}
                                                        className="bg-dark border-gray text-white"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <div className="d-flex justify-content-end">
                                                <CButton
                                                    color="primary"
                                                    className="me-2"
                                                    onClick={handleSave}
                                                >
                                                    저장
                                                </CButton>
                                                <CButton color="danger" onClick={handleDelete}>
                                                    삭제
                                                </CButton>
                                            </div>
                                        </div>
                                    </CTableDataCell>
                                </CTableRow>
                            )}
                        </>
                    ))}
                </CTableBody>
            </CTable>

            <CPagination className="mt-3 justify-content-center">
                <CPaginationItem
                    disabled={currentPage === 0}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </CPaginationItem>
                {Array.from({length: totalPages}, (_, index) => (
                    <CPaginationItem
                        key={index}
                        active={index === currentPage}
                        onClick={() => handlePageChange(index)}
                    >
                        {index + 1}
                    </CPaginationItem>
                ))}
                <CPaginationItem
                    disabled={currentPage === totalPages - 1}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </CPaginationItem>
            </CPagination>
        </CContainer>
);
};

export default ProfessorManagement;
