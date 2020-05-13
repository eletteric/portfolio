import React, { createContext, useState} from 'react';
import { v1 as uuidv1 } from 'uuid';

export const WorkContext = createContext();

const WorkContextProvider = (props) => {
    const [works, setWorks] = useState([
        { 
            id: 1,
            title: 'This is the title',
            year: 2020,
            featured: true,
            imagelink: 'http://www.imagelink.com'
        },
        { 
            id: 2,
            title: 'This is another title',
            year: 2019,
            featured: true,
            imagelink: 'http://www.imagelink.com'
        },
        { 
            id: 3,
            title: 'This is another title',
            year: 2019,
            featured: true,
            imagelink: 'http://www.imagelink.com'
        }     
    ]);
    const addWork = (title, year, featured, imagelink) => {
        setWorks([...works, {id: uuidv1(), title, year, featured, imagelink}])
    }
    const removeWork = (id) => {
        setWorks(works.filter( work => work.id !== id))
    };
    return(
        <WorkContext.Provider value={{works, addWork, removeWork}}>
            {props.children}
        </WorkContext.Provider>
    )
}

export default WorkContextProvider;