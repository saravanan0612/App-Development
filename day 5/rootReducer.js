// import { combineReducers } from "redux";
// import todoReducer from "./todoReducer";

// let rootReducer = combineReducers({
//   todoReducer: todoReducer,
// });

// export default rootReducer;


// In a Redux-based application, the concept of a "root reducer" is used to manage the overall state of your application. 
// It's essentially a reducer that combines multiple smaller reducers, each responsible for managing a specific part of the application's state. The root reducer takes the state produced by these smaller reducers and combines them into a single state object.
// Import the combineReducers function from the Redux library
import { combineReducers } from "redux";

// Import the todoReducer that you want to combine
import todoReducer from "./todoReducer";

// Define the rootReducer by using combineReducers
// Combine Reducers: Use the combineReducers function to create a single rootReducer. 
// This function takes an object as an argument, where each property represents a specific slice of the application state, and the values are the corresponding reducer functions.
let rootReducer = combineReducers({
  // Create a property named "todoReducer" in the root state
  // and associate it with the todoReducer you imported
  todoReducer: todoReducer,
});

// Export the rootReducer as the default export of this module
export default rootReducer;

