import { Form, Input, Button } from "antd";
import Router from 'next/router'
import styles from '../styles/Login.module.css'
import { useState } from 'react'

export default function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const registerHandler = () => {
    const params = { userName, password }
    api.register(params).then(res => {
      const { data: { code }} = res;
      if (code === 0) {
        Router.push('./list');
      }
    })
  }

  return (
    <div className={styles.register}>
      <p className={styles.title}>注册新用户</p>
      <Form className="login-form" style={{ width: "300px", margin: "0 auto" }}>
        <Form.Item>
          <Input placeholder="用户名" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Input type="password" placeholder="密码" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{ width: "100%", marginBottom: "6px" }}
            onClick={() => registerHandler()}
          >
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
