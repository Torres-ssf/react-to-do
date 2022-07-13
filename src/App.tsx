import styles from './App.module.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodosContainer } from './components/TodosContainer'

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TodoForm />
        <TodosContainer />
      </main>
    </>
  )
}

export default App
