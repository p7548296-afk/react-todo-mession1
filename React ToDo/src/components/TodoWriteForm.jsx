import { useState } from 'react'
import { useTodos } from '../context/TodoContext'

function TodoWriteForm() {
  const { addTodo } = useTodos()
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText.trim() === '') return
    addTodo(inputText)
    setInputText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">등록</button>
    </form>
  )
}

export default TodoWriteForm
