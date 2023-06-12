import styles from './page.module.css'
import dynamic from "next/dynamic";
// const StateExample = dynamic(() => import('@/app/components/stateExample'), { ssr: false});
const EffectExample = dynamic(() => import('@/app/components/effectExample'), { ssr: false});
const ContextExample = dynamic(() => import('@/app/components/contextExample'), { ssr: false});
export default function Home() {
  return (
    <main className={styles.main}>
      {/*<StateExample />*/}
      {/*<EffectExample />*/}
      <ContextExample />
    </main>
  )
}
