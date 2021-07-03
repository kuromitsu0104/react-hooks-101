import React from 'react';
import { connect } from 'react-redux';
import { setName, setAge } from './actions/userActions';

const App = (props) => {
  const clickSetName = (test) => {
    props.setName(test);
  }
  const clickSetAge = (test) => {
    props.setAge(test);
  }
  return (
    <div>
      <button onClick={() => clickSetName('test')}>Set Name</button>
      {props.name}
      <br />
      <button onClick={() => clickSetAge('test')}>Set Age</button>
      {props.age}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name)),
    setAge: (age) => dispatch(setAge(age)) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)