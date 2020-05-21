import React, { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import { db, auth } from "../services/firebase";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [myself, setMyself] = useState([
    {
      name: {
        first: "",
        last: "",
      },
      picture: {
        path: "http://via.placeholder.com/160x160",
        description: "",
      },
      skills: [
        {
          id: 1,
          skill: "",
          score: 5,
        },
        {
          id: 2,
          skill: "",
          score: 5,
        },
        {
          id: 3,
          skill: "",
          score: 5,
        },
      ],
      languages: [
        {
          language: "Dutch",
          abbreviation: "NL",
          spoken: 0,
          written: 0,
          native: true,
        },
        {
          language: "French",
          abbreviation: "FR",
          spoken: 0,
          written: 0,
          native: false,
        },
        {
          language: "English",
          abbreviation: "EN",
          spoken: 0,
          written: 0,
          native: false,
        },
      ],
    },
  ]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        myself,
        setMyself,
        loggedIn,
        setLoggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;