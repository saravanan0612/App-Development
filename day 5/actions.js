// import axios from 'axios';

// export let addTodo = (data) => {
//   return {
//     type: "ADD_TODO",
//     payload: data,
//   };
// };

// export let deleteTodo = (index) => {
//   return {
//     type: "DELETE_TODO",
//     payload: index,
//   };
// };


// export let removeAllTodo = () => {
//     return {
//       type: "REMOVE_ALL_TODO",
//     };
//   };

//   export const addUsers = (users) => {
//     return {
//       type: "ADD_USERS",
//       payload: users,
//     };
//   };
  

//   export const fetchDummyData = () => {
//     return (dispatch) => {
//       // You can replace this URL with the actual URL of your dummy API
//       axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//           // Assuming your API returns an array of todos, you can dispatch the data
//           dispatch(addTodo(response.data));
//         })
//         .catch((error) => {
//           // Handle error if the API request fails
//           console.error("Error fetching data from the API:", error);
//         });
//     };
//   };


// actions are used to describe changes to the application's state. They are a way to signal to the reducers what needs to be updated in the state. 
// Here are the reasons why actions are used in Redux:

import axios from 'axios';

// Action creator for adding todos
export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

// Action creator for deleting todos
export const deleteTodo = (index) => {
  return {
    type: "DELETE_TODO",
    payload: index,
  };
};

// Action creator for removing all todos
export const removeAllTodo = () => {
  return {
    type: "REMOVE_ALL_TODO",
  };
};

// Action creator for adding users
export const addUsers = (users) => {
  return {
    type: "ADD_USERS",
    payload: users,
  };
};

// Action creator for fetching user data from an API
export const fetchDummyData = () => {
  return (dispatch) => {
    // You can replace this URL with the actual URL of your dummy API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Dispatch user data using the addUsers action creator
        dispatch(addUsers(response.data));
      })
      .catch((error) => {
        // Handle error if the API request fails
        console.error("Error fetching data from the API:", error);
      });
  };
};

  