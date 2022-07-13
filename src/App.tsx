import styles from './App.module.css'
import { Header } from './components/Header'
import { TodosContainer } from './components/TodosContainer'

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TodosContainer />
      </main>
    </>
  )
}

export default App
