import React from "react"
import Card from "./Card"

export default function CardList(props) {
    const { team } = props

    return(
        <div>
            {team.map((item,index ) => 
                <Card 
                    name={item.name}
                    email={item.email}
                    role={item.role}
                    key={index} 
                />)
            }
        </div>
    )
}