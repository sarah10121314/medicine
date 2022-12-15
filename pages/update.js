import {
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Button
} from "antd";
import Router, { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import api from '../client/request/api'
import moment from 'moment'

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

const dateFormat = 'YYYY-MM-DD'

function Update(props) {
  const [detail, setDetail] = useState({})
  const { id } = props.router.query
  useEffect(() => {
    if (!id) return;
    api.getDetail(id).then(res => {
      const { data } = res;
      const _detail = {...detail, ...data}
      setDetail(_detail)
    });
  }, [])

  const updateHandler = () => {
    const { id } = detail
    api.updateDetail(id, detail).then(res => {
      const { status } = res;
      if (status === 200) {
        Router.push('./list');
      }
    });
  }

  const addHandler = () => {
    api.add(detail).then(res => {
      const { status } = res;
      if (status === 200 || status === 201) {
        Router.push('./list');
      }
    });
  }

  return (
    <div style={{ width: "50%", margin: '40px auto' }}>
      <Form {...formItemLayout}>
        <Form.Item label="药品名称" validateStatus="warning">
          <Input
            placeholder="请输入药品名称"
            id="warning"
            value={detail.name} 
            onChange={(e)=> setDetail({...detail, name: e.target.value})} 
          />
        </Form.Item>

        <Form.Item
          label="生产厂家"
          hasFeedback
        >
          <Input
            placeholder="请输入生产厂家"
            id="validating"
            value={detail.factory} 
            onChange={(e)=> setDetail({...detail, factory: e.target.value})} 
          />
        </Form.Item>

        <Form.Item label="价格" hasFeedback>
          <InputNumber
            style={{ width: "100px" }} 
            id="success"
            value={detail.price} 
            onChange={(value)=> setDetail({...detail, price: value})} 
          />
        </Form.Item>

        <Form.Item label="批准文号">
          <Input
            placeholder="请输入批准文号"
            value={detail.number} 
            onChange={(e)=> setDetail({...detail, number: e.target.value})} 
          />
        </Form.Item>

        <Form.Item
          label="规格"
        >
          <Input 
            placeholder="请输入药品规格"
            id="error2"
            value={detail.specification} 
            onChange={(e)=> setDetail({...detail, specification: e.target.value})}
          />
        </Form.Item>

        <Form.Item label="生产日期" hasFeedback>
          <DatePicker
            style={{ width: "200px" }}
            format={dateFormat}
            value={detail.productionDate ? moment(detail.productionDate, 'YYYY-MM-DD') : ''} 
            onChange={(value, dateString)=> setDetail({...detail, productionDate: dateString})}
          />
        </Form.Item>

      </Form>
      <div style={{ width: "100%", textAlign: 'center'}}>
        <Button
          type="primary"
          style={{marginRight: '30px'}}
          onClick={() => detail.id ? updateHandler() : addHandler()}
        >
          确认
        </Button>
        <Button onClick={() => Router.push('./list')}>取消</Button>
      </div>
    </div>
  );
}

export default withRouter(Update);
