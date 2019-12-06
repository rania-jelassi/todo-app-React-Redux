import { ADD, COMPLETE, DELETE, EDIT, SET_EDIT } from "./ActionTypes";
const intialState = {
  todos: []
};

function countReducer(state = intialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            terminer: false,
            text: action.payload,
            isEdited: false
          }
        ]
      };
    case COMPLETE:
      let arr1 = state.todos;
      arr1[action.payload].terminer = !arr1[action.payload].terminer;
      return {
        ...state,
        todos: [...arr1]
      };
    case DELETE:
      return {
        ...state,
        todos: [...state.todos.filter((ele, i) => action.payload != i)]
      };
    case EDIT:
      return {
        todos: state.todos.map(el =>
          el.id == action.payload.id ? { ...el, text: action.payload.text } : el
        )
      };
    case SET_EDIT:
      return {
        ...state,
        todos: state.todos.map(el =>
          el.id == action.payload ? { ...el, isEdited: !el.isEdited } : el
        )
      };
    default:
      return state;
  }
}
export default countReducer;
