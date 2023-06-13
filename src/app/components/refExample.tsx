"use client"
import {useRef, useState} from 'react';
import {Button, Card, Space} from 'antd';

export default () => {
  const scrollRef = useRef<any>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const onScroll = () => {
    if (scrollRef?.current) {
      console.log(scrollRef?.current);
      const clientHeight = scrollRef?.current?.clientHeight;
      const scrollTop = scrollRef?.current?.scrollTop;
      const scrollHeight = scrollRef?.current?.scrollHeight;
      setClientHeight(clientHeight);
      setScrollTop(scrollTop);
      setScrollHeight(scrollHeight);
    }
  }
  return (
    <Card title="useRef example" bordered={false} style={{ width: '100%' }}>
      <div>
        <p>可视区域高度：{clientHeight}</p>
        <p>滚动条滚动高度：{scrollTop}</p>
        <p>滚动内容高度：{scrollHeight}</p>
      </div>
      <div
        style={{ height: 200, border: "1px solid #000", overflowY: "auto" }}
        ref={scrollRef}
        onScroll={onScroll}
      >
        <div style={{height: 2000}}/>
      </div>
    </Card>
  )
}
