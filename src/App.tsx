import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";


// const todos = [
//   new Todo( 'Learn React'),
//   new Todo('learn TypeScript')
// ]

function App() {
 

  return (
    <TodosContextProvider>
      <NewTodo  />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
