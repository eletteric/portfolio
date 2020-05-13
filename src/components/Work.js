import React, { useContext, useState, useEffect } from "react";

import { WorkContext } from "../contexts/WorkContext";
import axios from 'axios';

const Work = () => {

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        
        console.log(res);
    setWorks(res.data.slice(0,10))
    })
    
      }, []);

  const { works, addWork, setWorks } = useContext(WorkContext);
  return works.length ? (
    <div>
        <ul style={{margin:0, padding:0}}> 
{ works.map(work => {
return(
<p key ={work.id} >{work.title}</p>
)
})}
        </ul>
    </div>
  ) : (<p>Loading work...</p>)
};

export default Work;
