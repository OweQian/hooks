"use client"
import {createContext, useContext, useState} from "react";
import {Button, Card} from "antd";

const CountContext = createContext(-1);

const Child = () => {
  const count = useContext(CountContext);

  return (
    <div style={{marginTop: '20px'}}>
      子组件获取到的 count: {count}
      <Son />
    </div>
  )
}

const Son = () => {
  const count = useContext(CountContext);

  return (
    <div style={{marginTop: '20px'}}>
      孙组件获取到的 count: {count}
    </div>
  )
}

export default () => {
  let [count, setCount] = useState(0);

  return (
    <Card title="useContext example" bordered={false} style={{ width: '100%' }}>
      <div>父组件中的 count：{count}</div>
      <Button type="primary" onClick={() => setCount(value => value + 1)}>
        点击 +1
      </Button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </Card>
  )
}
