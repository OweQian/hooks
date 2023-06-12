"use client"
import {useState} from 'react';
import {Button, Card, Space} from 'antd';
export default () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Card title="useState example" bordered={false} style={{ width: '100%' }}>
      <div>数字：{count}</div>
      <Space>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          第一种方式 +1
        </Button>
        <Button type="primary" onClick={() => setCount((value) => value + 1)}>
          第二种方式 +1
        </Button>
      </Space>
    </Card>
  )
}
