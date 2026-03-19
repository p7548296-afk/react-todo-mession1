import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // API에서 목록 불러오기
  const fetchTodos = () => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // Todo 추가
  const addTodo = () => {
    if (!inputValue.trim()) return

    const newTodo = {
      id: Date.now(),
      todo: inputValue,
      completed: false,
    }

    setTodos([newTodo, ...todos])
    setInputValue('')

    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    }).catch((err) => console.error(err))
  }

  // Todo 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))

    fetch(`https://dummyjson.com/todos/${id}`, { method: 'DELETE' }).catch((err) => console.error(err))
  }

  // Todo 체크 토글
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))

    const toggled = todos.find((t) => t.id === id)
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !toggled?.completed }),
    }).catch((err) => console.error(err))
  }

  return (
    <div className="App">
      <h1>Todo API 연동</h1>

      {/* 입력 */}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="할 일을 입력"
        onKeyDown={(e) => {
          if (e.key === 'Enter') addTodo()
        }}
      />
      <button onClick={addTodo}>등록</button>

      {/* 리스트 */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginLeft: '8px',
              }}
            >
              {todo.todo}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '8px' }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
