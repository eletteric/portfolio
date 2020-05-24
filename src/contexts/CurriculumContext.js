import React, { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import { db, auth } from "../services/firebase";

export const CurriculumContext = createContext();

const CurriculumkContextProvider = (props) => {

  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("milestones").get();
      setMilestones(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);


  return (
    <CurriculumContext.Provider value={{ milestones, setMilestones }}>
      {props.children}
    </CurriculumContext.Provider>
  );
};

export default CurriculumkContextProvider;