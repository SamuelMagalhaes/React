import Link from "next/link"
import styles from './topo.module.css'

export default function Topo(){
  return(
    <header className={styles.container_topo}>
        <h1>Navegação react</h1>
        <nav>
          <Link className={styles.link_frontend} href="/frontend">FrontEnd</Link>
          <Link className={styles.link_backend} href="/backend">BackEnd</Link>
          <Link className={styles.link_mobile} href="/mobile">Mobile</Link>
        </nav>
    </header>
  )
}