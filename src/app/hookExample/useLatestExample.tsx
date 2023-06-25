"use client"
import {useEffect, useState} from "react";
import {Button, Card} from "antd";
import useLatest from "@/app/hook/useLatest";

export default () => {
  const [count, setCount] = useState<number>(0);
  const countRef = useLatest(count);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('count', count);
      console.log('countRef', countRef);
      setCount(countRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card title="useLatest example" bordered={false} style={{ width: '100%' }}>
      <div>count: {count}</div>
    </Card>
  )
}
