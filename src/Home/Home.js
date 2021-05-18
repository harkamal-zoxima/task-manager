import { Menu, Button, Table } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import React from "react";
import "antd/dist/antd.css";
import "./Home.css";
import NestedTable from "./Table";
import TableNew from "./Table1";
import logo from "../Assets/jk-logo.png";
import { Link, Redirect, useHistory } from "react-router-dom";

const { SubMenu } = Menu;


class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  

  render() {
    return (
      <div className="outer-div">
        <div className="left-div">
          <Button
            type="primary"
            onClick={this.toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
            )}
          </Button>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            inlineCollapsed={this.state.collapsed}
          >
            <img className="task-img" src={logo} />
            <SubMenu
              key="sub1"
              icon={<MailOutlined />}
              title="Employee Management"
            >
              <Menu.Item key="1">Employee Tasks</Menu.Item>
              <Menu.Item key="2">Employee Task Tab</Menu.Item>
              <Link to="/addemp">
                <Menu.Item key="3">Add Employee</Menu.Item>
              </Link>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Task Management"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
        <div className="table-div">
          <TableNew />
        </div>
      </div>
    );
  }
}

export default Home;
