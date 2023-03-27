import React from "react";
import UserRemove from "./UserRemove";

const UserTable = ({ users }) => {
  return (
    <>
      <div className="table-responsive-sm container">
        <table className="table table-striped table-sm">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((eachUser) => (
              <tr>
                <td>{eachUser.fname}</td>
                <td>{eachUser.lname}</td>
                <td>{eachUser.email}</td>
                <td>{eachUser.city}</td>
                <td>{<UserRemove eachUsers={eachUser} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
