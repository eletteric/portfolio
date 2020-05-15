import React, { createContext, useState} from 'react';
import { v1 as uuidv1 } from 'uuid';

export const UserContext = createContext();

const UserContextProvider = (props) => {



    const [user, setUser] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <UserContext.Provider value={{user, setUser, email, setEmail, password, setPassword, loggedIn, setLoggedIn}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;