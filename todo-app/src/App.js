import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';

function App() {
  const todos = [
    {title: "Get Milk", dueDate: "01 Oct 2021", completed: false},
    {title: "Finish math hw", dueDate: "23 Oct 2021", completed: false}
  ]
  
  const todoClickHandler = (e) => {
    
  }
  return (
    <div className="App">
      {
        todos.map(
          ({title, dueDate, completed}) => 
            <TodoItem 
              title={title} 
              dueDate={dueDate} 
              completed={completed}
              onClick={todoClickHandler}/>)
      }
    </div>
  );
}

export default App;
