import React from 'react'

const SortByDate = ({productDate, setProductDate}) => {
  return (
    <div>
        <select value={productDate} onChange={(e) => setProductDate(e.target.value)}>
            <option value="">Sort By Date</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    </div>
  )
}

export default SortByDate