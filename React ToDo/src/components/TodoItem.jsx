function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        onChange={() => {
          toggleTodo(todo.id)
        }}
        checked={todo.checked}
      />
      {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  )
}

export default TodoItem
