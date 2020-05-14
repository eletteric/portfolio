import React, { useContext, useState, useEffect } from "react";

import { WorkContext } from "../contexts/WorkContext";
import axios from "axios";

const Work = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setWorks(res.data.slice(0, 10));
    }).catch(err=>console.log(err));
  }, []);

  const { works, addWork, setWorks } = useContext(WorkContext);
  return works.length ? (
    <div className="absoluteWrapper" >
      <ul style={{ margin: 0, padding: 0, paddingTop: '90px' }}>
        {works.map((work) => {
          return <p key={work.id}>{work.title}</p>;
        })}
      </ul>
    </div>
  ) : (
    <div className="absoluteWrapper" >
    <p>Loading work...</p>
    </div>

  );
};

export default Work;
