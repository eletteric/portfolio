import React, { createContext, useState} from 'react';
import { v1 as uuidv1 } from 'uuid';

export const WorkContext = createContext();

const WorkContextProvider = (props) => {



    const [works, setWorks] = useState([
    ]);
    const addWork = (title, year, featured, imagelink) => {
        setWorks([...works, {id: uuidv1(), title, year, featured, imagelink}])
    }
    const removeWork = (id) => {
        setWorks(works.filter( work => work.id !== id))
    };
    return(
        <WorkContext.Provider value={{works, addWork, removeWork, setWorks}}>
            {props.children}
        </WorkContext.Provider>
    )
}

export default WorkContextProvider;