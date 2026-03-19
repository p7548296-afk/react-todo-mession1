import { createContext, useContext, useEffect, useState } from 'react'

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      checked: false,
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
  }

  return <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>{children}</TodoContext.Provider>
}

export const useTodos = () => useContext(TodoContext)
