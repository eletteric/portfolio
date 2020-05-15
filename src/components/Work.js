import React, { useContext, useState, useEffect } from "react";

import { WorkContext } from "../contexts/WorkContext";
import {db, auth} from "../services/firebase";
import Paper from '@material-ui/core/Paper';

const Work = () => {
  const { works, addWork, setWorks } = useContext(WorkContext);


  useEffect(() => {
    db.collection("projects")
    .get()
    .then(
      snapshot=>{
        const projects = [];
        snapshot.forEach(doc=>{
          const data = doc.data();
          projects.push(data)
        })
        setWorks({projects: projects})
        console.log(snapshot)}
      )
    .catch(err=> console.log(err))
  }, []);



  return  (
    <div className="absoluteWrapper" >
      <div style={{ margin: 0, padding: 0, paddingTop: '90px', display:'flex', alignItems:'center', justifyContent:'center'}}>
        {works.projects && works.projects.map((work) => {
          return <Paper key={work.date} style={{margin:'10px'}}><img style={{display:'inline-block', padding:0, margin:0, height:'120px', width: '120px'}}src={work.image}/></Paper>;
        })}
      </div>
    </div>
  )

};

export default Work;
