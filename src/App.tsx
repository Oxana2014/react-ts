import Todos from './components/Todos';
import Todo from './models/todo';

const todos = [
  new Todo( 'Learn React'),
  new Todo('learn TypeScript')
]

function App() {
  return (
    <div >
    <Todos items={todos}/>
    </div>
  );
}

export default App;
