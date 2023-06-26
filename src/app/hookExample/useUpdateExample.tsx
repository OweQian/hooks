"use client"
import {Button, Card} from "antd";
import useUpdate from "@/app/hook/useUpdate";

export default () => {
  const update = useUpdate();

  return (
    <Card title="useUpdate example" bordered={false} style={{ width: '100%' }}>
      <div>时间: {Date.now()}</div>
      <Button
        type="primary"
        onClick={() => {
          update();
        }}
      >
        更新
      </Button>
    </Card>
  )
}
