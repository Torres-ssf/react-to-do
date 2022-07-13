import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'

import styles from './TodoForm.module.css'

export function TodoForm() {
  const [task, setTask] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(task)
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
