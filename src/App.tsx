// https://jsonplaceholder.typicode.com/todos - тут масив даних
// Кореневим компонентом є App
// Створити компонент TodoComponents в якому відбувається ітерація масиву даних отриманих з апі.
// Створити компонент TodoComponent який буде містити інформацію про окремий об'єкт з масиву.


import TodoComponents from "./components/todos/TodoComponents.tsx";

function App() {

  return (
      <>
          <TodoComponents />
      </>
  )
}

export default App
