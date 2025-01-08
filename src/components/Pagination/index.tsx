import React from 'react';
import ReactPaginate from 'react-paginate';

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
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
        />
    );
};

export default Pagination;
