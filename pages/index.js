import { Form, Input, Button, Checkbox } from "antd";
import Link from 'next/link'
import Router from 'next/router'
import styles from '../styles/Login.module.css'

export default function login() {
  const loginHandler = () => {
    Router.push('./list', {
        query: {
            name: 'zhangsan'
        }
    })
  }
  return (
    <div className={styles.login}>
      <p style={{width: '100%', textAlign: 'center'}}>欢迎来到您的药品之家</p>
      <Form className="login-form" style={{ width: "300px", margin: "0 auto" }}>
        <Form.Item>
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item>
          <Input type="password" placeholder="密码" />
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
