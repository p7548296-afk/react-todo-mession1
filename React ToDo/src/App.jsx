import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]) // 서버에서 받아온 todo 목록
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // API 호출
    fetch('https://dummyjson.com/todos?limit=0')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos || []) // dummyjson의 todos 속성
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to fetch todos:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Todo 리스트</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
