"use client"
import {useState} from "react";
import {Button, Card} from "antd";
import useCreation from "@/app/hook/useCreation";

export default () => {
  const [flag, setFlag] = useState<boolean>(false);
  const getNowData = () => Math.random();
  const nowData = useCreation(() => getNowData(), []);

  return (
    <Card title="useCreation example" bordered={false} style={{ width: '100%' }}>
      <div>正常的函数： {getNowData()}</div>
      <div>useCreation包裹后的： {nowData}</div>
      <Button
        type="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        切换状态{JSON.stringify(flag)}
      </Button>
    </Card>
  )
}
