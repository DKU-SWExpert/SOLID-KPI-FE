import {useState} from 'react';
import {CCol, CContainer, CRow} from '@coreui/react';
import StudentTable from '@components/StudentTable';
import StudentSearchBar from '@components/StudentSearchBar';
import Pagination from '@components/Pagination';
import {useStudentStore} from '@store/studentStore.ts';

const StudentList = () => {
    const {data, search} = useStudentStore();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    // 검색 필터링 로직
    const filteredData = data.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    // 페이지 수 계산
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    // 페이지 클릭 이벤트 처리
    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    return (
        <CContainer className="py-4">
            <CRow className="mb-3">
                <CCol sm={4}>
                    <StudentSearchBar/>
                </CCol>
            </CRow>

            <StudentTable currentPage={currentPage} itemsPerPage={itemsPerPage}/>

            <Pagination pageCount={pageCount} onPageChange={handlePageClick}/>
        </CContainer>
    );
};

export default StudentList;
