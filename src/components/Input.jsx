import React from 'react'

const Input = ({searchName, setSearchName}) => {
  return (
    <div className="mr">
        <input 
        type="text" 
        placeholder="Seach by Name" 
        value={searchName} 
        onChange={(e) => setSearchName(e.target.value)} 
      />
    </div>
  )
}

export default Input