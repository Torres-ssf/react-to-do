import { ITodoItem } from '../App'
import { TodoItem } from './TodoItem'
import styles from './TodoList.module.css'

export interface ITodoListProps {
  todos: ITodoItem[]
  onDeleteTodo(id: string): void
  onSetTodoCompleted(id: string): void
}

export function TodoList(props: ITodoListProps) {
  const { todos, onDeleteTodo, onSetTodoCompleted } = props

  const numberOfTodos = todos.length
  const numberOfCompletedTodos = todos.filter(todo => todo.isCompleted).length
  const numberOfIncompletedTodos = numberOfTodos - numberOfCompletedTodos

  return (
    <div className={styles.todoContainer}>
      <header>
        <div>
          <strong>Pending tasks</strong> <p>{numberOfIncompletedTodos}</p>
        </div>
        <div>
          <strong>Completed tasks</strong>{' '}
          <p>
            {numberOfCompletedTodos} from {numberOfTodos}
          </p>
        </div>
      </header>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            onSetTodoCompleted={onSetTodoCompleted}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}
