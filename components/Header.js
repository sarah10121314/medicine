import logo from "../assets/imgs/logo.png";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import { Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Router from "next/router";

export default function Header() {
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => Router.push("./login")}>
        退出
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.header}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <span className={styles.headerTitle}>您掌上的药品之家</span>
      <div className={styles.logOut}>
        <Dropdown overlay={menu}>
          <span>
            <UserOutlined style={{ marginRight: "4px" }} />
            <a onClick={(e) => e.preventDefault()}>茵佳妮</a>
          </span>
        </Dropdown>
      </div>
    </div>
  );
}
