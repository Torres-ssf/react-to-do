import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'

import { formatText } from '../helpers'
import styles from './TodoForm.module.css'

export interface ITodoFormProps {
  onAddTodo: (task: string) => void
}

export function TodoForm(props: ITodoFormProps) {
  const [task, setTask] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const text = formatText(task)

    if (text.length) {
      props.onAddTodo(text)
    }

    setTask('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add new task"
        required
      />
      <button type="submit">
        Create
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}
