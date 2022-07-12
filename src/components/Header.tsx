import Rocket from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Rocket} alt="Logo" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  )
}
