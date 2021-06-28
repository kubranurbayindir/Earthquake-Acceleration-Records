import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default function Sidebar() {
    const navStyle = {
        color: 'black'
    }

    return (
        <div  style={{
            width: "100%",
            height: "100%",
          }}>
            <Link style={navStyle} to='/bodxchart'>    <Segment color='red'>TDG Bod X Record Chart</Segment> </Link> <br></br>
            <Link style={navStyle} to='/bodychart'> <Segment color='green'>TDG Bod Y Record Chart</Segment> </Link><br></br>
            <Link style={navStyle} to='/bodzchart'> <Segment color='blue'>TDG Bod Z Record Chart</Segment> </Link>
        </div>
    )
}
