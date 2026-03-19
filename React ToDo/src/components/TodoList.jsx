import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useTodos()

  return (
    <ul style={{ listStyle: 'none', padding: '2px', margin: '5px' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
