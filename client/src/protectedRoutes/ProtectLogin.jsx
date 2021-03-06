import React, { useContext } from "react";
import { Redirect, Route, withRouter } from "react-router-dom";

import { StoreContext } from "../store/StoreProvider";

const ProtectLogin = ({ path, component: Component }) => {
  const { user } = useContext(StoreContext);
  const isLoggedUser = Boolean(user);

  return (
    <Route
      path={path}
      render={(props) => {
        if (!isLoggedUser) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

export const ProtectLoginPage = withRouter(ProtectLogin);
