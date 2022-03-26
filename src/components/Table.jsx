import React from 'react'

const Table = ({productstatus, filterCustomer, filterByStatus}) => {
  return (
    <div>
        <table className="content-table">
        <thead>
           <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Product</th>
            <th>Date Order</th>
            <th>Status</th>
           </tr>
        </thead>
        <tbody>
          {
            productstatus === "" ? (
              filterCustomer.map((info, idx) => (
                <tr key={idx}>
                  <td>{info.order_id}</td>
                  <td>{info.customer}</td>
                  <td>{info.address}</td>
                  <td>{info.product_title}</td>
                  <td>{info.date}</td>
                  <td>{info.status}</td>
                </tr>
              ))
            ) : (
              filterByStatus.map((info, idx) => (
                <tr key={idx}>
                  <td>{info.order_id}</td>
                  <td>{info.customer}</td>
                  <td>{info.address}</td>
                  <td>{info.product_title}</td>
                  <td>{info.date}</td>
                  <td>{info.status}</td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table