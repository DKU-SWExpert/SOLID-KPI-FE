import React from 'react';
import ReactPaginate from 'react-paginate';
import '@styles/custom-color.css';

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({pageCount, onPageChange}) => {
    return (
        <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName="pagination justify-content-center mt-3"
            pageClassName="page-item"
            pageLinkClassName="page-link bg-dawn-light border-gray"
            previousClassName="page-item"
            previousLinkClassName="page-link bg-dawn-light border-gray text-white"
            nextClassName="page-item"
            nextLinkClassName="page-link bg-dawn-light border-gray text-white"
            breakClassName="page-item"
            breakLinkClassName="page-link bg-dawn-light border-gray text-white"
            activeClassName="active"
        />
    );
};

export default Pagination;
