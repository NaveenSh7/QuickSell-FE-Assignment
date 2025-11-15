import React, { useEffect, useRef, useCallback } from 'react'
import './cust_table.css'
import user_avatar from '../assets/image.png'
import mytestuser from '../assets/test_user-3 3.svg'

const CustomerTable = ({ records, loadMore, loading, hasMore, totalRecords }) => {
  const observerRef = useRef()
  const tableContainerRef = useRef()

  const lastRecordCallback = useCallback(node => {
    if (loading) return
    if (observerRef.current) observerRef.current.disconnect()
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore()
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    })
    
    if (node) observerRef.current.observe(node)
  }, [loading, hasMore, loadMore])

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <div className="table-parts">
      <div className="table-container" ref={tableContainerRef}>
        <table className="customer-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="select-all" />
              </th>
              <th>Customer Name</th>
              <th>Id</th>
              <th>Email</th>
              <th>Last message sent at</th>
              <th>Added by</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => {
              const isLastItem = index === records.length - 1
              return (
                <tr 
                  key={record.id} 
                  className="table-rows"
                  ref={isLastItem ? lastRecordCallback : null}
                >
                  <td>
                    <input type="checkbox" className="row-checkbox" />
                  </td>
                  <td className="customer-info">
                    <div className="customer-details">
                      <img src={user_avatar} className="customer-avatar" />
                      <div className="customer-text">
                        <div className="customer-name">{record.name}</div>
                        <div className="customer-phone">{record.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="id-column">{record.id}</td>
                  <td className="email-column">{record.email}</td>
                  <td className="message-date">{record.last_message}</td>
                  <td className="added-by">
                    <div className="added-by-info">
                      <img src={mytestuser} className="added-by-avatar" />
                      <span>{record.addby}</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        
        {!hasMore && records.length > 0 && (
          <div className="end-message">
            <p>This is the end of the list, the millionth customre is above</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerTable
