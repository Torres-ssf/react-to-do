import { Check, Trash } from 'phosphor-react'

import styles from './TodoItem.module.css'

export interface ITodoItemProps {
  id: string
  task: string
  isCompleted: boolean
}

export function TodoItem(props: ITodoItemProps) {
  return (
    <li className={styles.todoItem}>
      <button
        type="button"
        className={
          props.isCompleted
            ? `${styles.checkButton} ${styles.checkButtonCompleted}`
            : styles.checkButton
        }
      >
        {props.isCompleted && <Check weight="bold" size={14} />}
      </button>
      {props.isCompleted ? (
        <p>
          <s>{props.task}</s>
        </p>
      ) : (
        <p>{props.task}</p>
      )}
      <button type="button" className={styles.deleteButton}>
        <Trash className={styles.trashIcon} size={16} />
      </button>
    </li>
  )
}
