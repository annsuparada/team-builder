import React from "react"

export default function Card(props) {
    const { name, email, role } = props

    return(
        <div>
            {name}
            <br/>
            {email}
            <br/>
            {role}
            <br/>

        </div>
    )
}