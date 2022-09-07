import React from "react";

const UserTable = ({ users }) => {
  return (
    <>
      {users.map((eachUser) => (
        <tr>
          <td>{eachUser.fname}</td>
          <td>{eachUser.lname}</td>
          <td>{eachUser.email}</td>
          <td>{eachUser.city}</td>

          {/* Ation Buttons */}
          <td>
            <button type="button" class="btn btn-info">
              View
            </button>
            <button type="button" class="ms-2 btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserTable;
