import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../home/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routers({ login, signup }) {
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );

  return (
    <div className="pt-5">
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route exact path="/login" element={<LoginForm login={login} />} />

        <Route exact path="/signup" element={<SignupForm signup={signup} />} />

        <Route exact path="/companies" element={<PrivateRoute />}>
          <Route exact path="/companies" element={<CompanyList />} />
        </Route>

        <Route exact path="/jobs" element={<PrivateRoute />}>
          <Route exact path="/jobs" element={<JobList />} />
        </Route>

        <Route exact path="/companies/:handle" element={<PrivateRoute />}>
          <Route exact path="/companies/:handle" element={<CompanyDetail />} />
        </Route>

        <Route exact path="/profile" element={<PrivateRoute />}>
          <Route exact path="/profile" element={<ProfileForm />} />
        </Route>

        {/* <Navigate to="/" /> */}
      </Routes>
    </div>
  );
}

export default Routers;
