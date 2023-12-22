import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from 'redux/filterReducer';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return <input type="text" value={filter} onChange={handleChange} />;
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default Filter;
