import React from "react"
import Card from "./Card"

export default function CardList(props) {
    const { team, edit, setEdit, setFormName } = props
    
    return(
        <div>
            {team.map((item,index ) => 
                <Card 
                    name={item.name}
                    email={item.email}
                    role={item.role}
                    edit={edit}
                    setEdit={setEdit} 
                    setFormName={setFormName}
                    memberIndex={index}
                    key={index} 
                />)
            }
        </div>
    )
}