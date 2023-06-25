"use client"
import {useEffect, useLayoutEffect, useState} from 'react';
import {Card} from 'antd';

export default () => {
 const [count, setCount] = useState<number>(0);
 const [count1, setCount1] =useState<number>(0);
 useEffect(() => {
   if (count === 0) {
     setCount(10 + Math.random() * 100);
   }
 }, [count]);
 useLayoutEffect(() => {
   if (count1 === 0) {
     setCount1(10 + Math.random() * 100);
   }
 }, [count1]);
  return (
    <Card title="useLayout example" bordered={false} style={{ width: '100%' }}>
      <div>大家好</div>
      <div>useEffect中的count: {count}</div>
      <div>useLayoutEffect中的count: {count1}</div>
    </Card>
  )
}
