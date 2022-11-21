import Faq from '../components/Faq'
import Productlist from '../components/Productlist'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div >
      <main className={styles.main}>
      <Productlist/>
      <Faq/>
      </main>
      </div>
  )
}
