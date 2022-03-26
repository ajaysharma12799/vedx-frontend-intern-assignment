import axios from 'axios'
import React from 'react'
import './App.css'
import Table from './components/Table'
import Input from './components/Input'
import SortByDate from './components/SortByDate'
import FilterByStatus from './components/FilterByStatus'

const App = () => {
  const URL = "https://my-json-server.typicode.com/Ved-X/assignment/orders"
  const [data, setData] = React.useState([]);
  const [searchName, setSearchName] = React.useState("");
  const [productstatus, setProductStatus] = React.useState("");
  const [productDate, setProductDate] = React.useState("");

  const fetchData = async () => { // Method to Get Data From API
    const response = await axios.get(URL);
    setData(response.data);
  }

  const filterCustomer = data.filter(info => info.customer.toLowerCase().includes( searchName.toLowerCase())); // Method to Filter Customer By Their Names

  const filterByStatus = data.filter(info => info.status.toLowerCase().includes(productstatus.toLowerCase())); // Method to Filter Customer By Their Status

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="options">
        <Input searchName={searchName} setSearchName={setSearchName} />
        <SortByDate productDate={productDate} setProductDate={setProductDate} />
        <FilterByStatus productstatus={productstatus} setProductStatus={setProductStatus} />
      </div>
      <div>
        <Table 
          productstatus={productstatus} 
          filterByStatus={filterByStatus} 
          filterCustomer={filterCustomer} 
        />
      </div>
    </React.Fragment>
  )
}

export default App