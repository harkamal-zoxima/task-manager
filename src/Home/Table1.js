import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Table } from 'antd';

const data = require("../Emp.json")

const columns = [
    { title: "Emp. Code", dataIndex: "empCode", key: "empCode" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Designation", dataIndex: "designation", key: "designation" },
    { title: "Salary", dataIndex: "salary", key: "salary" },
    { title: "Start Date", dataIndex: "startDate", key: "startDate" }
];



const TableNew = () =>{
    return(
        <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.desc}</p>,
    }}
    dataSource={data.Data}
  />
    )
}

  export default TableNew
