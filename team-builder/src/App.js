import React, { useState } from 'react';
import { render } from "react-dom";
import { teamMember} from "./data"
import Form from "./component/Form"
import CardList from './component/CardList'

import './App.css';


console.log(teamMember)

function App() {
  const [team, setTeam] = useState([]);
  const [edit, setEdit] = useState({name:'', email:'',role:''})
  const [formName, setFormName] = useState('Add Member')
  

  return (
    <div className="App">
     
      <Form 
        setTeam={setTeam} 
        team={team}
        edit={edit}
        setEdit={setEdit}
        formName={formName}
        setFormName={setFormName}
      />
      <CardList 
        team={team}
        edit={edit}
        setEdit={setEdit} 
        setFormName={setFormName}
      />

         
    
    </div>
  );
}

export default App;
