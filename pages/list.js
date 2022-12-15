import Router from 'next/router'
import { Table, Button, Modal, message } from "antd"
import styles from '../styles/List.module.css'
import { useState, useEffect } from 'react'
import api from '../client/request/api'
import ImportExcel from '../components/importFile'

const { confirm } = Modal

const handleExcelData = (arr) => {
  console.log('handleExcelData', arr)
  if(!arr || !arr.length) {
    return [];
  }
  const keys = ['id', 'name', 'price', 'factory', 'specification', 'productionDate', 'number']
  const target = [];
  return arr.map(item => {
    const obj = {};
      keys.map((key, index) => {
        obj[key] = item[index];
      })
    return obj;
  })
}

export default function List() {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "药品名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "生产厂家",
      dataIndex: "factory",
      key: "factory",
    },
    {
      title: "规格",
      dataIndex: "specification",
      key: "specification",
    },
    {
      title: "生产日期",
      dataIndex: "productionDate",
      key: "productionDate",
    },
    {
      title: "批准文号",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (row) => {
        return (
          <>
            <span className={styles.update} onClick={()=>Router.push(`./update?id=${row.id}`)}>修改</span>
            <span className={styles.delete} onClick={() => showDeleteConfirm(row.id)}>删除</span>
          </>
        );
      },
    },
  ];

  const [list, setList] = useState([])
  const [excelData, setExcelData] = useState([])
  // 获取数据
  const getList = () => {
    api.getList().then(res => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      }
    })
  }
  useEffect(() => {
    getList()
  }, []);

  const deleteHandler = (id) => {
    api.deleteDetail(id).then(res => {
      const { data, status } = res;
      if (status === 200) {
        message.success('删除成功')
        getList()
      }
    })
  }
  
  function showDeleteConfirm(id) {
    confirm({
      title: '确认要删除该药品吗?',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        deleteHandler(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const targetExcelData = handleExcelData(excelData);
  console.log(targetExcelData);
  const tableList = list.concat(targetExcelData);
  console.log('tableList', tableList)
  return (
      <div style={{margin: '20px'}}>
        <div style={{ display: 'flex', marginBottom: '20px'}}>

          <Button
            className={styles.add}
            onClick={() => Router.push('./update')}
          >
            添加
          </Button>

          <ImportExcel btnName="导入" setExcelData={setExcelData} />

        </div>
        <Table dataSource={tableList} columns={columns} rowKey={row => row.id} />
      </div>
  );
}
