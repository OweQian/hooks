import styles from './page.module.css'
import dynamic from "next/dynamic";
// const StateExample = dynamic(() => import('@/app/components/stateExample'), { ssr: false});
// const EffectExample = dynamic(() => import('@/app/components/effectExample'), { ssr: false});
// const ContextExample = dynamic(() => import('@/app/components/contextExample'), { ssr: false});
// const ReducerExample = dynamic(() => import('@/app/components/reducerExample'), { ssr: false});
// const MemoExample = dynamic(() => import('@/app/components/memoExample'), { ssr: false});
// const CallbackExample = dynamic(() => import('@/app/components/callbackExample'), { ssr: false});
// const RefExample = dynamic(() => import('@/app/components/refExample'), { ssr: false});
// const ImperativeHandleExample = dynamic(() => import('@/app/components/imperativeHandleExample'), { ssr: false});
// const LayoutExample = dynamic(() => import('@/app/components/layoutExample'), { ssr: false});
// const UseLatestExample = dynamic(() => import('@/app/hookExample/useLatestExample'), { ssr: false});
const UseMountAndUnmountExample = dynamic(() => import('@/app/hookExample/useMountAndUnmountExample'), { ssr: false});
export default function Home() {
  return (
    <main className={styles.main}>
      {/*<StateExample />*/}
      {/*<EffectExample />*/}
      {/*<ContextExample />*/}
      {/*<ReducerExample />*/}
      {/*<MemoExample />*/}
      {/*<CallbackExample />*/}
      {/*<RefExample />*/}
      {/*<ImperativeHandleExample />*/}
      {/*<LayoutExample />*/}
      {/*<UseLatestExample />*/}
      <UseMountAndUnmountExample />
    </main>
  )
}
