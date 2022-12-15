import React from 'react'
import { Upload, message, Button } from 'antd'
import * as XLSX from 'xlsx'

export default function ImportFile(props) {
  const uploadProps = {
    accept: '.xls, .xlsx',
    showUploadList: false,
    beforeUpload: (file) => {
      const reader = new FileReader()
      reader.readAsBinaryString(file)
      reader.onload = function(e) {
        const data = e.target.result
        const workbook = XLSX.read(data, {
          type: 'binary'
        })
        const sheetOne = workbook.Sheets[workbook.SheetNames[0]];
        const jsonArr = XLSX.utils.sheet_to_json(sheetOne, {header: 1})
        const targetData = jsonArr.slice(1)
        props.setExcelData(targetData)
        message.success('导入成功')
      }
    }
  }
  return (
    <div>
        <Upload {...uploadProps}>
            <Button>
                {props.btnName}
            </Button>
        </Upload>
    </div>
  )
}
