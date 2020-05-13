import React, { useContext, useState } from "react";

import { WorkContext } from "../contexts/WorkContext";

const Work = () => {
  const { works } = useContext(WorkContext);
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
  ) : (<p>No works to dislay</p>)
};

export default Work;
