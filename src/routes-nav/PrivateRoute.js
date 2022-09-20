import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

function PrivateRoute({ exact, path }) {
  const { currentUser } = useContext(UserContext);

  console.debug(
    "PrivateRoute",
    "exact=",
    exact,
    "path=",
    path,
    "currentUser=",
    currentUser
  );

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

// import React, { useContext } from "react";
// import { Route, Navigate } from "react-router-dom";
// import UserContext from "../auth/UserContext";

// /** "Higher-Order Component" for private routes.
//  *
//  * In routing component, use these instead of <Route ...>. This component
//  * will check if there is a valid current user and only continues to the
//  * route if so. If no user is present, redirects to login form.
//  */

// function PrivateRoute({ exact, path, element, children }) {
//   const { currentUser } = useContext(UserContext);

//   console.debug(
//     "PrivateRoute",
//     "exact=",
//     exact,
//     "path=",
//     path,
//     "currentUser=",
//     currentUser
//   );

//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <Route exact={exact} path={path} element={element}>
//       {children}
//     </Route>
//   );
// }

// export default PrivateRoute;
