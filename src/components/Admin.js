import React, { useContext, useEffect } from "react";
import { db, auth } from "../services/firebase";

import { UserContext } from "../contexts/UserContext";
import firebase from "../services/firebase";
import Login from "./Login";

const Admin = (props) => {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  return (
    <div className="absoluteWrapper">
      {loggedIn ? (<h1 style={{ marginTop: "100px" }}>Admin Page</h1>) : (<Login/>)}
    </div>
  );
};

export default Admin;
