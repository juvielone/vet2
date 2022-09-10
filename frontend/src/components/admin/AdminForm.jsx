import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminForm = () => {
  // Initialize Navigate
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userId: "",
    password: "",
  });

  const { userId, password } = userData;

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    if (userId === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      console.log("nope");
    }
  };

  return (
    <>
      <div
        class="modal fade"
        id="adminModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <h3>
                  <i class="bi bi-person-fill"></i>
                  Admin
                </h3>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={onSubmit}>
                <div class="form-floating">
                  {/* User Id */}
                  <input
                    type="text"
                    name="userId"
                    value={userId}
                    onChange={handleChange}
                    class="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">User ID</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
                <p class="mt-5 mb-3 text-muted">
                  Note: This form is for admin only
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminForm;
