import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAdmin, reset } from "../../features/admin/adminSlice";

const AdminForm = () => {
  // Initialize Navigate and Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    userId: "",
    password: "",
  });
  const { userId, password } = userData;
  const [close, setClose] = useState("");

  // Calling states using useSelector
  const { adminUser, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );
  // UseEffect =====================================================
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // If registration is success navigate to dashboard
    if (isSuccess && adminUser) {
      navigate("/admin");
    }

    // calls reset reducer after either of two are called
    dispatch(reset());
  }, [adminUser, isError, isSuccess, message, navigate, dispatch]);

  // UseEffect =====================================================

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // data-bs-dismiss="modal"
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { userId, password };
    dispatch(loginAdmin(userData));
    // console.log(userData);
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

                <button
                  class="w-100 btn btn-lg btn-primary"
                  type="submit"
                  data-bs-dismiss="modal"
                >
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
