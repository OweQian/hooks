"use client"
import {Button, Card, message} from "antd";
import {useState} from "react";
import useMount from "@/app/hook/useMount";
import useUnmount from "@/app/hook/useUnmount";
import useUnmountedRef from "@/app/hook/useUnmountedRef";

const Child = () => {
  const unmountedRef = useUnmountedRef();
  useMount(() => console.log('初始化', unmountedRef));
  useUnmount(() => console.log('卸载', unmountedRef));
  return <div>大家好</div>
}

export default () => {
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <Card title="useUnmountedRef example" bordered={false} style={{ width: '100%' }}>
      <Button type="primary" onClick={() => setFlag(v => !v)}>
        切换{flag ? '卸载' : '初始化'}
      </Button>
      {flag && <Child />}
    </Card>
  )
}
