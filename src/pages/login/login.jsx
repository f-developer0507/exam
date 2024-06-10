import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const { userName, userPassword } = form;
    if (userName === "admin" && userPassword === "123") {
      navigate("/main")
    } else {
      alert("404");
    }
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSumbit}>
                <input
                  type="text"
                  placeholder="User Name"
                  className="form-control my-2"
                  name="userName"
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control my-2"
                  name="userPassword"
                  onChange={handleChange}
                  required
                />
              </form>
            </div>
            <div className="card-footer">
              <button type="submit" form="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
