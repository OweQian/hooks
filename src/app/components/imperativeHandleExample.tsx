"use client"
import {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Button, Card} from 'antd';

const Child = forwardRef((props, ref) => {
  const [count, setCount] = useState<number>(0);
  const add = () => setCount(value => value + 1);
  useImperativeHandle(ref, () => ({
    add,
  }))

  return (
    <div>
      <p>点击次数：{count}</p>
      <Button type="primary" onClick={add}>子组件的按钮，点击+1</Button>
    </div>
  )
})
export default () => {
  const childRef = useRef(null)
  return (
    <Card title="useImperativeHandle example" bordered={false} style={{ width: '100%' }}>
      <div>大家好</div>
      <Button type="primary" onClick={() => childRef?.current?.add()}>父组件的按钮，点击+1</Button>
      <Child ref={childRef}/>
    </Card>
  )
}
