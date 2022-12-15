import styles from "../styles/Layout.module.css";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import Router from 'next/router'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("药品", "/list", <MailOutlined />),
  getItem("健康", "/health", <AppstoreOutlined />)
];

const Sidebar = () => {
  const onSelect = ({ keyPath }) => {
    Router.push(keyPath[0]);
  }

  return (
    <div className={styles.sidebar}>
      <Menu
        mode="inline"
        onSelect={onSelect}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
