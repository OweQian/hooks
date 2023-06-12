"use client"
import {useReducer} from 'react';
import {Button, Card, Space} from 'antd';

const Child = ({ count }) => {
  console.log('子组件发生更新');
  return <div>在子组件的count：{count}</div>;
};

export default () => {
  const [count, dispatch] = useReducer((state: number, action: any) => {
    switch (action?.type) {
      case 'add':
        return state + action?.payload;
      case 'sub':
        return state - action?.payload;
      default:
        return state;
    }
  }, 0);
  console.log('父组件发生更新');
  return (
    <Card title="useReducer example" bordered={false} style={{ width: '100%' }}>
      <div>数字：{count}</div>
      <Space>
        <Button type="primary" onClick={() => dispatch({type: 'add', payload: 1})}>
          第一种方式 +1
        </Button>
        <Button type="primary" onClick={() => dispatch({type: 'sub', payload: 1})}>
          第二种方式 -1
        </Button>
        <Button type="primary" onClick={() => dispatch({ type: 'no', payload: 1 })}>
          无关按钮
        </Button>
      </Space>
      <Child count={count} />
    </Card>
  )
}
