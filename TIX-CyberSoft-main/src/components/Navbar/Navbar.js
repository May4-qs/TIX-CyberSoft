import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import style from "./Navbar.module.css";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Button} from "antd";
import logo from "../../assets/web-logo.png"

const { Header } = Layout;


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Header className={style.header}>
          <Layout>
          <Menu mode="horizontal">
          <img className={style.logo} src={logo}/>
              <Menu.Item className={style.text} key="1">Lịch Chiếu</Menu.Item>
              <Menu.Item className={style.text} key="2">Cụm Rạp</Menu.Item>
              <Menu.Item className={style.text} key="3">Tin Tức</Menu.Item>
              <Menu.Item className={style.text} key="4">Ứng Dụng</Menu.Item>
              <Button className={style.button}>
                <UserOutlined />
                Đăng Nhập
              </Button>
            </Menu>
          </Layout>
        </Header>
      </div>
    );
  }
}
