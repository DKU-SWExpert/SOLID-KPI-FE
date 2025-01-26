import { useState } from "react";
import { useItemStore } from "@store/item";
import { CContainer, CCol, CRow } from "@coreui/react";
import ItemTable from "@components/ItemTable";
import Pagination from "@components/Pagination";
import AddButton from "@pages/Management/Item/AddButton";
import SearchBar from "@pages/Management/Item/SearchBar";

const ItemManagement = () => {
  const { data, search } = useItemStore();
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
          <SearchBar />
        </CCol>
        <CCol sm={8} className="text-end">
          <AddButton />
        </CCol>
      </CRow>

      <ItemTable currentPage={currentPage} itemsPerPage={itemsPerPage} />

      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </CContainer>
  );
};
export default ItemManagement;
