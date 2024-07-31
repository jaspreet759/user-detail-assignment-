import React from 'react';
import PropTypes from 'prop-types';

const SortButton = ({ sortOrder, onSort }) => (
  <button onClick={onSort}>
    Sort by Name ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
  </button>
);

SortButton.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired
};

export default SortButton;
