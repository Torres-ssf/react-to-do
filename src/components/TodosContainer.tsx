import { TodoItem } from './TodoItem'
import styles from './TodosContainer.module.css'

export function TodosContainer() {
  return (
    <div className={styles.todoContainer}>
      <header>
        <div>
          <strong>Pending tasks </strong>
          <p>0</p>
        </div>
        <div>
          <strong>Completed tasks </strong>
          <p>2 from 5</p>
        </div>
      </header>
      <ul>
        <TodoItem id="1" isCompleted={false} task="Learn React" />
        <TodoItem
          id="2"
          isCompleted
          task="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        />
        <TodoItem
          id="2"
          isCompleted={false}
          task="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        />
      </ul>
    </div>
  )
}
