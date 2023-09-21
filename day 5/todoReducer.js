// let initialState = {
//   list: [],
// };

// let todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_USERS":
//       return { ...state, users: action.payload };
//     case "ADD_TODO":
//       return { list: [...state.list, action.payload] };
//     case "DELETE_TODO":
//       state.list.splice(action.payload, 1);
//       return { list: [...state.list] };
//     case "REMOVE_ALL_TODO":
//       return { list: [] };
//     default:
//       return state;
//   }
// };

// export default todoReducer;

// In Redux, reducers are responsible for managing specific pieces of application state. 
// The todoReducer you mentioned is used to manage the state related to a to-do list in your application. Here are the reasons for using a todoReducer:

let initialState = {
  users: [], // Initialize users as an empty array
  Todolist: [], // Initialize list as an empty array
};

let todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for adding users to the state
    case "ADD_USERS":
      return { ...state, users: action.payload };
    // Case for adding a todo to the list
    case "ADD_TODO":
      return { ...state, Todolist: [...state.Todolist, action.payload] };
    // Case for deleting a todo from the list
    case "DELETE_TODO":
      // Use splice to remove the todo at the specified index
      state.list.splice(action.payload, 1);
      // Return a new state with the updated list
      return { ...state, Todolist: [...state.Todolist] };
    // Case for removing all todos from the list
    case "REMOVE_ALL_TODO":
      // Return a new state with an empty list
      return { ...state, Todolist: [] };
    // Default case for handling unknown actions
    default:
      // Return the current state unchanged
      return state;
  }
};
export default todoReducer;

