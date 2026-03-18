import { useRef, useState } from 'react'
import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'

function App() {
  const lastId = useRef(4)

  const [todos, setTodos] = useState([
    { id: 3, text: '공부하기', checked: true },
    { id: 2, text: '코딩하기', checked: false },
    { id: 1, text: '운동하기', checked: true },
  ])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setTodos([{ id: lastId.current, text: form.todo.value, checked: false }, ...todos])
    lastId.current++
  }

  const removeTodo = (seletedId) => {
    const filterTodos = todos.filter((todo) => todo.id != seletedId)
    setTodos(filterTodos)
  }

  const toggleTodo = (seletedId) => {
    const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
    setTodos(updateTodos)
  }

  return (
    <>
      <TodoWriteForm handleOnSubmit={handleOnSubmit} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </>
  )
}

export default App
