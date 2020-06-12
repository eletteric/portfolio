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
        path: "https://via.placeholder.com/160x160",
        description: "",
      },
      skills: [
        {
          id: 1,
          skill: "",
          score: 1,
        },
        {
          id: 2,
          skill: "",
          score: 1,
        },
        {
          id: 3,
          skill: "",
          score: 1,
        },
      ],
      softSkills: [
        {
          id: 1,
          skill: "Trustworthy",
          score: 4.5,
        },
        {
          id: 2,
          skill: "Responsible",
          score: 4,
        },
        {
          id: 3,
          skill: "Team Player",
          score: 3,
        },
        {
          id: 4,
          skill: "Flexibility",
          score: 3,
        },
        {
          id: 5,
          skill: "Leadership",
          score: 4,
        }
      ],
      languages: [
        {
          language: "Dutch",
          id: 0,
          spoken: 0,
          written: 0,
          native: true,
        },
        {
          language: "French",
          id: 1,
          spoken: 0,
          written: 0,
          native: false,
        },
        {
          language: "English",
          id: 2,
          spoken: 0,
          written: 0,
          native: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("myself").get();
      setMyself(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);


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