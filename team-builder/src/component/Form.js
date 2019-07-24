import React, { useState } from 'react';

export default function Form(props) {
    const {team, setTeam} = props
    
    const [teamMember, setTeamMember ] = useState({name:'', email:'',role:''})

    const handleChange = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
      };
      
    const handleSubmit = event => {
        event.preventDefault();
        setTeam([...team, teamMember])
        console.log(team)
    }


    return (

        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>

                    add member
                </legend>
                <label>
                    {` Name: `}
                    <input 
                        type="text" 
                        name="name"
                        onChange={event => handleChange(event)}
                        value={teamMember.name}
                    />
                </label>
                <label>
                    {` Email: `}
                    <input 
                        type="text" 
                        name="email"
                        onChange={event => handleChange(event)}
                        value={teamMember.email}
                    />
                </label>
                <label>
                    {` Role: `}
                    <input 
                        type="text" 
                        name="role"
                        onChange={event => handleChange(event)}
                        value={teamMember.role}
                    />
                </label>
                <input type="submit" />
            </fieldset>
        </form> 
    )
}