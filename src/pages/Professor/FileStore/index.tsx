import {useState} from 'react';
import {CCol, CContainer, CRow} from '@coreui/react';
import FileTable from '@/components/FileTable';
import SearchBar from '@/components/SearchBar';
import AddButton from '@/components/AddButton';
import Pagination from '@/components/Pagination';
import {useFileStore} from '@/store/fileStore';

const FileStore = () => {
    const {data, search} = useFileStore();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    return (
        <CContainer className="py-4">
            <CRow className="mb-3">
                <CCol sm={4}>
                    <SearchBar/>
                </CCol>
                <CCol sm={8} className="text-end">
                    <AddButton/>
                </CCol>
            </CRow>

            <FileTable currentPage={currentPage} itemsPerPage={itemsPerPage}/>

            <Pagination pageCount={pageCount} onPageChange={handlePageClick}/>
        </CContainer>
    );
};

export default FileStore;
