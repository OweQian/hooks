"use client"
import {Button, Card, message} from "antd";
import {useState} from "react";
import useMount from "@/app/hook/useMount";
import useUnmount from "@/app/hook/useUnmount";

const Child = () => {
  useMount(() => message.info('首次渲染'));
  useUnmount(() => message.info('组件已卸载'));
  return <div>大家好</div>
}

export default () => {
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <Card title="useMountAndUnmount example" bordered={false} style={{ width: '100%' }}>
      <Button type="primary" onClick={() => setFlag(v => !v)}>
        切换{flag ? 'unmount' : 'mount'}
      </Button>
      {flag && <Child />}
    </Card>
  )
}
