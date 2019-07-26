import React, { useState } from "react";
import Member from "./component/Member";
import Form from "./component/Form";

import "./App.css";


function App() {
  const [members, setMembers] = useState([]);

  const submitMember = member => setMembers([...members, member]);
  const update = uMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === uMember.id) {
          return uMember;
        }
        return member;
      })
    ]);

  console.log("members", members);

  return (
    <div className="App">
      <Form add={submitMember} />
      {members.map((member, i) => (
        <Member member={member} key={i} update={update} />
      ))}
      
    </div>
  );
}

export default App;
