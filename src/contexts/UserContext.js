import React, { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import {db, auth} from "../services/firebase";

export const UserContext = createContext();

const UserContextProvider = (props) => {

  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);


  const [myself, setMyself] = useState([{
    name: {
      first: '',
      last: '',
    },
    skills: [
        {
            skill: '',
            score: 0
        },
        {
            skill: '',
            score: 0 
        },
        {
            skill: '',
            score: 0
        }
    ],
    languages: [
      {
        language: "Dutch",
        abbreviation: "NL",
        spoken: 100,
        written: 95,
        native: true,
      },
      {
        language: "French",
        abbreviation: "FR",
        spoken: 75,
        written: 70,
        native: false,
      },
      {
        language: "Englsh",
        abbreviation: "EN",
        spoken: 85,
        written: 75,
        native: false,
      },
    ],
  }]);

  

  
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(
    "http://via.placeholder.com/160x160"
  );

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
        profileImage,
        setProfileImage,
        profileImageUrl,
        setProfileImageUrl,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
