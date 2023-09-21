import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDummyData } from "../actions/actions";
import './user.css'

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.todoReducer.users);

  useEffect(() => {
    // Fetch user data when the component mounts
    dispatch(fetchDummyData());
  }, [dispatch]);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
