"use client"
import {useState, memo, useCallback} from 'react';
import {Button, Card, Space} from 'antd';

const TestButton = memo(({children, onClick = () => {}}) => {
  console.log(children);
  return (
    <Button type="primary" onClick={onClick}>
      {children}
    </Button>
  )
})

export default () => {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(true);
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <Card title="useCallback example" bordered={false} style={{ width: '100%' }}>
      <Space>
        <TestButton onClick={() => setCount(value => value + 1)}>普通点击</TestButton>
        <TestButton onClick={add}>useCallback点击</TestButton>
      </Space>
      <div>数字：{count}</div>
      <Button type="primary" onClick={() => setFlag(value => !value)}>切换：{JSON.stringify(flag)}</Button>
    </Card>
  )
}
