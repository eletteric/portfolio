import React, { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import { db, auth } from "../services/firebase";

export const ToolContext = createContext();

const ToolContextProvider = (props) => {

  const [tools, setTools] = useState([
{
  name:'Illustrator',
  description:'vector illustration program',
  iconUrl:'https://via.placeholder.com/150',
  category: 'Design and Layout',
  percentage:'80',
}
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("tools").get();
      setTools(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);


  return (
    <ToolContext.Provider value={{ tools, setTools }}>
      {props.children}
    </ToolContext.Provider>
  );
};

export default ToolContextProvider;