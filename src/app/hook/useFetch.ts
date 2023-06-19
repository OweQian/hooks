import {useDebugValue, useEffect, useState} from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  // 使用 useDebugValue Hook 显示 loading 和 data 的值
  useDebugValue({ loading, data });

  return { loading, data };
}

export default useFetch;
