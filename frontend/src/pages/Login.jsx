import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, login } from "../features/auth/authSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import paw from "../img/paw.svg";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import pic4 from "../img/pic4.png";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Destructuring userdata
  const { email, password } = userData;

  // Initialize Navigate and Dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Calling states using useSelector
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // UseEffect =====================================================
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // If registration is success navigate to dashboard
    if (isSuccess || user) {
      navigate("/mydashboard");
      window.location.reload(false);
    }

    // calls reset reducer after either of two are called
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // UseEffect =====================================================

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };

    // Calling regiter in our authSlice
    // Passing userDate in the register
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#efeef7", paddingTop: "2.5rem" }}>
        <div className="container login-section">
          <div className="row">
            <div className="col-lg-6 form-container row">
              <h1 className="mt-5 login-content">
                <i class="bi bi-patch-check-fill"></i>
                <span className="ms-3">Welcome Back</span>
              </h1>
              <p className=" login-content col-lg-10 ms-4  ">
                Welcome back! Please enter your details.
              </p>
              {/* Form */}
              <form className="row ms-3 " onSubmit={handleSubmit}>
                {/* Email */}
                <div className="col-lg-10">
                  <label for="email" class="form-label">
                    Email(Required)
                  </label>
                  <input
                    className="form-control "
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                {/* Password */}
                <div className="col-lg-10">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    className="form-control "
                    type="password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-login btn-lg"
                >
                  <img src={paw} width="45" height="41" className="paw" />
                  Login
                </button>
              </form>
            </div>

            {/*  Carousel */}
            <div className="col-lg-6">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide ms-5"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner ms-5">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img src={pic4} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={pic2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={pic3} class="d-block w-100" alt="..." />
                  </div>

                  <div class="carousel-item">
                    <img src={pic1} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
