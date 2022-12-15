import { Form, Input, Button, Checkbox } from "antd";
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import styles from '../styles/Login.module.css'
import api from '../client/request/api'

export default function Login() {
  const [userName, setUserName] = useState('zhangsan');
  const [password, setPassword] = useState('123456');
  const loginHandler = () => {
    const params = { userName, password }
    api.login(params).then(res => {
      const { data: { code }} = res;
      if (code === 0) {
        Router.push('./list');
      }
    })
  }
  return (
    <div className={styles.login}>
      <p className={styles.title}>欢迎来到您的药品之家</p>
      <Form className="login-form" style={{ width: "300px", margin: "0 auto" }}>
        <Form.Item>
          <Input placeholder="用户名" value={userName} onChange={(e)=> setUserName(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Input type="password" placeholder="密码" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Checkbox style={{margin: '0 0 16px 0'}}>记住我</Checkbox>
          <Button
            type="primary"
            style={{width: '100%', marginBottom: '6px'}}
            onClick={() => loginHandler()}
          >
            登录
          </Button>
          <Link href="/register">注册</Link>
        </Form.Item>
      </Form>
    </div>
  );
}
