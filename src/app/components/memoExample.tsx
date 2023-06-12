"use client"
import {useMemo, useState} from 'react';
import {Button, Card} from 'antd';

const usePow = (list: number[]) => {
  return useMemo(() => {
    return list.map((item: number) => {
      console.log('我是usePow');
      return Math.pow(item, 2);
    })
  }, [])
}
export default () => {
  const [flag, setFlag] = useState<boolean>(true);
  const data = usePow([1, 2, 3]);
  return (
    <Card title="useMemo example" bordered={false} style={{ width: '100%' }}>
      <div>数字集合：{JSON.stringify(data)}</div>
      <Button type="primary" onClick={() => setFlag(value => !value)}>
        状态切换：{JSON.stringify(flag)}
      </Button>
    </Card>
  )
}
