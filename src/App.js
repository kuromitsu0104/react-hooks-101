import React from 'react';
import { connect } from 'react-redux';
import { setName, setAge } from './actions/userActions';

const App = () => {
  const clickSetName = () => {
    this.props.setName("Taro Yamada");
  }
  const clickSetAge = () => {
    this.props.setAge(30);
  }
  return (
    <div>
      <button onClick={this.clickSetName.bind(this)}>Set Name</button>
      {this.props.name}
      <br />
      <button onClick={this.clickSetAge.bind(this)}>Set Age</button>
      {this.props.age}
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