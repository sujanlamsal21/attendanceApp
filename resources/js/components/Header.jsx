import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap";
import { CustomModal } from "./Helper";
import AddUser from "./AddUser";

export default function Header(){
    return (
        <div>
            <div style={{ backgroundColor: "lightgreen", height: "70px"}}>
                <h3 style={{display:"flex", justifyContent:"center"}}>Attendance App</h3>
                <ul style={{display:"flex", float:"right", listStyle:"none",marginRight:"10%"}} className="pull-right">
                    <li style={{marginLeft:'15px'}}><Link to='/' >Home</Link></li>
                    <li style={{marginLeft:'15px'}}><Link to='/pull-data'>Pull Data <span className="sr-only">(Today)</span></Link></li>
                    <li style={{marginLeft:'15px'}}><Link to='/setting' >Setting</Link></li>
                    <li style={{marginLeft:'15px'}}><Link to='/devices' >Devices</Link></li>
                    {/* <li style={{marginLeft:'15px'}}>List User</li> */}
                </ul>
            </div>
    </div>
    )
}