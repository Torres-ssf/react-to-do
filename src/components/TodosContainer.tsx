import { useState } from 'react'

import { TodoItem } from './TodoItem'
import styles from './TodosContainer.module.css'

export interface ITodoItem {
  id: string
  task: string
  isCompleted: boolean
}

const staticTasks: ITodoItem[] = [
  { id: '1', task: 'Learn React', isCompleted: false },
  { id: '2', task: 'Learn TypeScript', isCompleted: false },
  {
    id: '3',
    task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
  },
]

export function TodosContainer() {
  const [tasks, setTasks] = useState(staticTasks)

  const numberOfTasks = tasks.length
  const numberOfCompletedTasks = tasks.filter(task => task.isCompleted).length
  const numberOfIncompletedTasks = numberOfTasks - numberOfCompletedTasks

  function onSetCompleted(id: string) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    )
  }

  return (
    <div className={styles.todoContainer}>
      <header>
        <div>
          <strong>Pending tasks</strong> <p>{numberOfIncompletedTasks}</p>
        </div>
        <div>
          <strong>Completed tasks</strong>{' '}
          <p>
            {numberOfCompletedTasks} from {numberOfTasks}
          </p>
        </div>
      </header>
      <ul>
        {tasks.map(task => (
          <TodoItem key={task.id} {...task} onSetCompleted={onSetCompleted} />
        ))}
      </ul>
    </div>
  )
}
