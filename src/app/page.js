import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <main className={styles.main}>
    <div>
      <h1>Seja bem vindo ao exemplo de navegação react</h1>
    </div>
   </main>
  )
}
