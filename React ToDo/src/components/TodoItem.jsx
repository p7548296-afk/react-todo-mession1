import { useTodos } from '../context/TodoContext'

function TodoItem({ todo }) {
  const { removeTodo, toggleTodo } = useTodos()
  return (
    <li>
      <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.checked} />

      <span
        style={{
          marginLeft: '8px',
          textDecoration: todo.checked ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  )
}

export default TodoItem
