// import Form from "antd/lib/form/Form";
import React, { useState } from "react";

import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button } from 'antd';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


function AddEmp() {

    const [empCode,setEmpCode] = useState();
    const [name,setName] = useState();
    const [designation,setDesignation] = useState();
    const [salary,setSalary] = useState();
    const [start,setStart] = useState();
    // console.log(empCode);

  return (
    <div style={{width:"60%",marginTop:"111px",marginLeft:"14%"}}>
      <Form
        {...layout}
        name="nest-messages"
        // onFinish={onFinish}
        // validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Employee code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e)=>setEmpCode(e.target.value)} />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Name"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input onChange={(e)=>setName(e.target.value)}/>
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Designation"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input onChange={(e)=>setDesignation(e.target.value)}/>
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Salary">
          <Input onChange={(e)=>setSalary(e.target.value)}/>
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="start date">
          <Input onChange={(e)=>setStart(e.target.value)}/>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddEmp;
