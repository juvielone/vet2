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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
