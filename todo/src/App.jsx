import { useReducer } from 'react';
import './App.css';
const initialState = {
  inputvalue: '',
  todos: [],
};
const reducer = (state, action) => {
  console.log("reducer", action.payload);
  switch (action.type) {
    case 'INPUTVALUE':
      return {
        ...state,
        inputvalue: action.payload,
      };
    case 'ADDTODOS':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE':
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputvalue = (event) => {
    dispatch({ type: 'INPUTVALUE', payload: event.target.value });
  };
  console.log(state);

  const addTodos = () => {
    const newObject = {
      title: state.inputvalue,
      id: Math.random(),
    };
    dispatch({ type: 'ADDTODOS', payload: newObject });
  };
  const delTodo = (id) => {
    const filtered = state.todos.filter((e) => {
      if (e.id === id) {
        return false;
      } else {
        return true;
      }
    });
    console.log("delTodo", filtered);
    dispatch({ type: 'DELETE', payload: filtered });
  };
  return (
    <div className="App">
      <input type="text" value={state.value} onChange={inputvalue} />
      <button onClick={addTodos}>add</button>
      <ul>
        {state.todos.map((e) => {
          return (
            <li>
              {console.log(e)}
              {console.log(e.title)}
              {e.title} <button onClick={() => delTodo(e.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
