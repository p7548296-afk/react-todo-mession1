function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
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
      ))}
    </ul>
  )
}

export default TodoList
