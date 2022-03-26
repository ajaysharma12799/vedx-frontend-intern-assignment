import React from 'react'

const FilterByStatus = ({productstatus, setProductStatus}) => {
  return (
    <div>
        <select value={productstatus} onChange={(e) => setProductStatus(e.target.value)}>
            <option value="">Filter</option>
            <option value="prepared">Prepared</option>
            <option value="completed">Completed</option>
            <option value="delivered">Delivered</option>
        </select>
    </div>
  )
}

export default FilterByStatus