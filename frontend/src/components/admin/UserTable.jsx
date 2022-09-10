import React from "react";

const UserTable = ({ users }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((eachUser) => (
              <tr>
                <td>{eachUser.fname}</td>
                <td>{eachUser.lname}</td>
                <td>{eachUser.email}</td>
                <td>{eachUser.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
