import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actions/todoActions';

const App = (props) => {
  const clickAddTodo = () => {
    props.addTodo("New Todo");
  }
    
  const clickDeleteTodo = id => {
    props.deleteTodo(id);
  }

  return (
    <div>
      <button onClick={clickAddTodo}>Set Name</button>
      <ul>
        {
          props.todos.map((todo) => {
            return (
              <li key={todo.id}>{todo.id} {todo.text}
                <button onClick={() => clickDeleteTodo(todo.id)}>DEL</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)