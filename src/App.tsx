import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import styles from './App.module.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export interface ITodoItem {
  id: string
  task: string
  isCompleted: boolean
}

const staticTodos: ITodoItem[] = [
  { id: uuid(), task: 'Learn React', isCompleted: false },
  { id: uuid(), task: 'Learn TypeScript', isCompleted: false },
  {
    id: uuid(),
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
  },
]

function App() {
  const [todos, setTodos] = useState(staticTodos)

  function onAddTodo(task: string) {
    const todo: ITodoItem = {
      id: uuid(),
      task,
      isCompleted: false,
    }
    setTodos(todos => [...todos, todo])
  }

  function onSetTodoCompleted(id: string) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo
      })
    )
  }

  function onDeleteTodo(id: string) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TodoForm onAddTodo={onAddTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={onDeleteTodo}
          onSetTodoCompleted={onSetTodoCompleted}
        />
      </main>
    </>
  )
}

export default App
