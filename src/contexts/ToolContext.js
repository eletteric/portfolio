import React, { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import { db, auth } from "../services/firebase";

import IllustratorIcon from "../img/Adobe-Illustrator.svg";
import PhotoshopIcon from "../img/Photoshop.svg";
import IndesignIcon from "../img/Indesign.svg";
import gitIcon from "../img/git.svg";
import jQueryIcon from "../img/jQuery.svg";
import ReactIcon from "../img/react-icon.svg";
import VueIcon from "../img/vue.svg";
import WordPressIcon from "../img/WordPress.svg";
import SassIcon from "../img/sass.svg";
import PowerPointIcon from "../img/PowerPoint.svg";
import PremiereIcon from "../img/Premiere.svg";
import SketchUpIcon from "../img/SketchUp.svg";




export const ToolContext = createContext();

const ToolContextProvider = (props) => {

  const [tools, setTools] = useState([
{
  id:1,
  name:'Adobe Illustrator',
  description:'vector illustration program',
  iconUrl: IllustratorIcon,
  category: 'Design and Layout',
  percentage:'95',
},
{
  id:2,
  name:'Photoshop',
  description:'bitmap editing program',
  iconUrl: PhotoshopIcon,
  category: 'Design and Layout',
  percentage:'90',
},
{
  id:3,
  name:'Indesign',
  description:'layout program',
  iconUrl: IndesignIcon,
  category: 'Design and Layout',
  percentage:'75',
},
{
  id:4,
  name:'Git',
  description:'version control',
  iconUrl: gitIcon,
  category: 'Front-end development',
  percentage:'65',
},
{
  id:5,
  name:'jQuery',
  description:'javaScript',
  iconUrl: jQueryIcon,
  category: 'Front-end development',
  percentage:'65',
},
{
  id:6,
  name:'ReactJS',
  description:'javaScript',
  iconUrl: ReactIcon,
  category: 'Front-end development',
  percentage:'55',
},
{
  id:7,
  name:'VueJS',
  description:'javaScript',
  iconUrl: VueIcon,
  category: 'Front-end development',
  percentage:'55',
},
{
  id:8,
  name:'WordPress',
  description:'CMS theming',
  iconUrl: WordPressIcon,
  category: 'Front-end development',
  percentage:'85',
},
{
  id:9,
  name:'Sass',
  description:'CMS theming',
  iconUrl: SassIcon,
  category: 'Front-end development',
  percentage:'65',
},
{
  id:10,
  name:'PowerPoint',
  description:'presentations',
  iconUrl: PowerPointIcon,
  category: 'Miscellaneous',
  percentage:'65',
},
{
  id:11,
  name:'Premiere',
  description:'video editing',
  iconUrl: PremiereIcon,
  category: 'Miscellaneous',
  percentage:'55',
},
{
  id:12,
  name:'SketchUp',
  description:'3D drawing',
  iconUrl: SketchUpIcon,
  category: 'Miscellaneous',
  percentage:'75',
},
  ]);

  return (
    <ToolContext.Provider value={{ tools, setTools }}>
      {props.children}
    </ToolContext.Provider>
  );
};

export default ToolContextProvider;