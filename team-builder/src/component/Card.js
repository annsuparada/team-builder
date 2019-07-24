import React from "react"

export default function Card(props) {
    const { name, email, role, edit, setEdit, setFormName, team,memberIndex } = props

    const clickHandler = () => 
        {
            if(
                edit !=={name:'', email:'',role:''} &&
                setEdit.name === name && edit["email"] === email && edit.role === role
            )
            {
                setFormName("Add Member")
                setEdit({name:'', email:'',role:''})
            }
            else{
                setFormName('Edit Member')
                setEdit(team[memberIndex])
            }
        }
    return(
        <div>
            {name}
            <br/>
            {email}
            <br/>
            {role}
            <br/>
            <button onClick={clickHandler}>Edit</button>
        </div>
    )
}