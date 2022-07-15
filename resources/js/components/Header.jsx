import {Link} from "react-router-dom"
import {Button} from "react-bootstrap";

export default function Header(){
    return (
        <div>
            <div style={{ backgroundColor: "lightgreen", height: "70px"}}>
                <h3 style={{display:"flex", justifyContent:"center"}}>Attendance App</h3>
                <ul style={{display:"flex", float:"right", listStyle:"none",marginRight:"10%"}} className="pull-right">
                    <li style={{marginLeft:'15px'}}><Button to=''>Pull Data <span className="sr-only">(Today)</span></Button></li>
                    <li style={{marginLeft:'15px'}}>Add USer</li>
                    <li style={{marginLeft:'15px'}}>List User</li>
                </ul>
            </div>
    </div>
    )
}