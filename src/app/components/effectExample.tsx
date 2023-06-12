"use client"
import {useEffect, useState} from "react";
import {Button, Card, Space} from "antd";

// export default () => {
//   const [number, setNumber] = useState<number>(0);
//   const [count, setCount] = useState<number>(0);
//
//   useEffect(() => {
//     console.log('count变化才会执行')
//   }, [count]);
//
//   return (
//     <Card title="useEffect example" bordered={false} style={{ width: '100%' }}>
//       <div>number: {number} count: {count}</div>
//       <Space>
//         <Button type="primary" onClick={() => setNumber(value => value + 1)}>number + 1</Button>
//         <Button type="primary" onClick={() => setCount(value => value + 1)}>count + 1</Button>
//       </Space>
//     </Card>
//   )
// };

export default () => {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    console.log('大家好');
  });

  return (
    <Card title="useEffect example" bordered={false} style={{ width: '100%' }}>
      <Space>
        <Button type="primary" onClick={() => setCount(value => value + 1)}>数字加一：{count}</Button>
        <Button type="primary" onClick={() => setFlag(value => !value)}>状态转换：{JSON.stringify(flag)}</Button>
      </Space>
    </Card>
  )
}
