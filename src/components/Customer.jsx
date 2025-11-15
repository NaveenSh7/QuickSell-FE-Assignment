import React from 'react'
import './Customer.css'
import search from '../assets/test_Search-3.svg'
import filter from '../assets/test_Filter.svg'
import CustomerTable from './CustomerTable'

const Customer = (props) => {
  const handleSearchInput = (e) => {
    const searchValue = e.target.value
    props.onSearch(searchValue)
  }

  return (
    <div className='outer_div'>
     
      <div className='searching_cust'>
        <img src={search}/>
        <input 
          type="text" 
          placeholder='Search customers by name' 
          value={props.searchTerm || ''}
          onChange={handleSearchInput}
        />
      </div>

      <div className='filtering_cust'>
        <img src={filter}/>

      +         <select style={{padding:'px 2px'}}>
+           <option>Filer Name </option>
+           <option>Filer 1</option>
+           <option>Filer 2</option>
+           <option>Filer 3</option>
+         </select>
      </div>

      <CustomerTable 
        records={props.records}
        loadMore={props.loadMore}
        loading={props.loading}
        hasMore={props.hasMore}
        totalRecords={props.totalRecords}
      />
    </div>
  )
}

export default Customer
