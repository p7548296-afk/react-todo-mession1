function TodoWriteForm({ handleOnSubmit }) {
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
    </>
  )
}

export default TodoWriteForm
