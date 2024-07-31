import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange, disabled }) => (
  <div className="pagination">
    <button 
      onClick={() => onPageChange(currentPage - 1)} 
      disabled={currentPage === 1 || disabled}
    >
      Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button 
      onClick={() => onPageChange(currentPage + 1)} 
      disabled={currentPage === totalPages || disabled}
    >
      Next
    </button>
  </div>
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Pagination;
