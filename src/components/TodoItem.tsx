import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './TodoItem.module.css'

export interface ITodoItemProps {
  id: string
  task: string
  isCompleted: boolean
  onDeleteTodo: (id: string) => void
  onSetTodoCompleted: (id: string) => void
}

export function TodoItem(props: ITodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted)

  function handleSetCompleted() {
    setIsCompleted(!isCompleted)
    props.onSetTodoCompleted(props.id)
  }

  function handleDeleteTask() {
    props.onDeleteTodo(props.id)
  }

  return (
    <li className={styles.todoItem}>
      <button
        type="button"
        onClick={handleSetCompleted}
        className={
          isCompleted
            ? `${styles.checkButton} ${styles.checkButtonCompleted}`
            : styles.checkButton
        }
      >
        {isCompleted && <Check weight="bold" size={14} />}
      </button>
      {isCompleted ? (
        <p>
          <s>{props.task}</s>
        </p>
      ) : (
        <p>{props.task}</p>
      )}
      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDeleteTask}
      >
        <Trash className={styles.trashIcon} size={16} />
      </button>
    </li>
  )
}
