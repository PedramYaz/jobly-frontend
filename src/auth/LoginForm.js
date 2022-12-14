import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";

/** Login Form.
 *
 * Shows the form and manages update to state on change.
 *
 * On submission:
 *  - Calls login function prop
 *  - redirects to /companies route
 *
 * Routes -> LoginForm -> Alert
 * Routed as /login
 *
 */

const initialState = {
  username: "",
  password: "",
};

function LoginForm({ login }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "LoginForm",
    "login=",
    typeof login,
    "formData=",
    formData,
    "formErrors=",
    formErrors
  );

  /** Handle form submition:
   *
   * Calls login func prop and if successful, redirects to /companies
   *
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      navigate("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div className="LoginForm">
      <div className="container">
        <h3 className="mb-3">Log In</h3>

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="username"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
              </div>
              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <button
                className="btn btn-primary float-right"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
