import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodo, fetchDummyData } from "../actions/actions";
import User from './user'; 

function Todo() {
  const [todo, settodo] = useState("");

  const todoList = useSelector((store) => store.todoReducer.Todolist) || []; // Ensure todoList is defined, initialize as an empty array if undefined

  let dispatch = useDispatch();
  useEffect(() => {
    // Fetch dummy data from the API when the component mounts
    dispatch(fetchDummyData());
  }, [dispatch]);

  return (
    <div>
      <h1>Todo List (Redux)</h1>
      <input
        placeholder="Enter todo"
        name="todo"
        value={todo}
        onChange={(e) => {
          settodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(todo));
          settodo("");
        }}
      >
        ➕
      </button>

      <h2>Todo list from store</h2>
      {todoList.map((val, idx) => {
        return (
          <div key={idx}>
            <li>{val}</li>
            <button
              onClick={() => {
                dispatch(deleteTodo(idx));
              }}
            >
              ❌
            </button>
          </div>
        );
      })}

      {todoList.length > 0 && (
        <button
          onClick={() => {
            dispatch(removeAllTodo());
          }}
        >
          🗑️ Remove all
        </button>
      )}
       <User />
    </div>
  );
}

export default Todo;


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteTodo, removeAllTodo, fetchDummyData } from "../actions/actions";
// import User from './user'; // Import the User component

// function Todo() {
//   const [todo, setTodo] = useState("");
//   const todoList = useSelector((store) => store.todoReducer.list);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Fetch dummy data from the API when the component mounts
//     dispatch(fetchDummyData());
//   }, []);

//   return (
//     <div>
//       <h1>Todo List (Redux)</h1>
//       <input
//         placeholder="Enter todo"
//         name="todo"
//         value={todo}
//         onChange={(e) => {
//           setTodo(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           dispatch(addTodo(todo));
//           setTodo("");
//         }}
//       >
//         ➕
//       </button>

//       <h2>Todo list from store</h2>
//       {todoList.map((val, idx) => (
//         <div key={idx}>
//           <li>{val.title}</li>
//           {/* <p>User ID: {val.userId}</p> */}
//           <p>Completed: {val.completed ? "Yes" : "No"}</p>
//           <button
//             onClick={() => {
//               dispatch(deleteTodo(idx));
//             }}
//           >
//             ❌
//           </button>
//         </div>
//       ))}

//       {todoList.length > 0 && (
//         <button
//           onClick={() => {
//             dispatch(removeAllTodo());
//           }}
//         >
//           🗑️ Remove all
//         </button>
//       )}

//       {/* Render the User component */}
//       <User />
//     </div>
//   );
// }

// export default Todo;


