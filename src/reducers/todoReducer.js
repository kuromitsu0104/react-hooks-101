const initState = []

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
    }
}

export default todoReducer;