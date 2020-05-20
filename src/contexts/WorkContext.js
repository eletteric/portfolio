import React, { createContext, useState, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import { db, auth } from "../services/firebase";

export const WorkContext = createContext();

const WorkContextProvider = (props) => {
    const [works, setWorks] = useState([

    ]);
    useEffect(() => {

        const fetchData= async ()=>{
        const data = await db.collection("projects")
        .get();
        setWorks(data.docs.map(doc=> doc.data()));
        
        }
        fetchData()
        }, []);


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