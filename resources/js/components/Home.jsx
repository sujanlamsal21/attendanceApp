import React,{useState, useEffect} from "react";
import Header from "../components/Header";
import { Row ,Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import { CustomModal } from "./Helper";
import AddUser from "./AddUser";

export default function Home(props) {
    const axios = props.axios;
    const [modalShow, setModelShow]= useState(false);
    const [error, setError]= useState({});
    const [data, setData]= useState({
        device_name:"",
        device_port:"",
        device_ip:"",
        title:"Add User",
        buttonText:"Submit"
    });
    const handleClose =() => setModelShow(false);
    const handleShow =() => setModelShow(true);
    const [details, setDetails]= useState([]);

    const submitForm =(e)=>{
      e.preventDefault();
      console.log(data, 'susuuhyu')
    }

    const handleOnInputChange=(e)=>{
       setData({...data,
         [e.target.name]:e.target.value
    })
    }

    const getAllUsers=()=>{
        const baseUrl = props.SERVER_DOMAIN + `/api/getUsers`
        axios.get(`${baseUrl}`)
            .then(response => {
                setDetails(response.data.data);
                console.log(response.data.data, 'success')
            }).catch(error => {
                console.log(error.response, "error");
            })
    }

    useEffect(()=>{
        getAllUsers();
    },[])
    return (
        <Row className="col-md-12">
            <Col className="col-md-12">
                <>
                    <div className='pull-right' style={{ marginBottom: "8px", float:'right' }}>
                        <button className='btn btn-primary pull-right btn-flat'
                        onClick={handleShow}
                        >
                            Add User
                        </button>
                    </div>
                </>
            </Col>
            <Col className="col-md-12">
                <div className="box">
                    <table className="table table-bordered table-fit table-condensed" style={{ marginLeft: '10px' }}>
                        <>
                            <thead>
                                <tr>
                                    <th className="col-md-2 text-center">User id</th>
                                    <th className="col-md-2 text-center">User Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details?.map((raw,index)=>{
                                        return (
                                            <tr key={index}>
                                            <td className="text-center">{raw.userid}</td>
                                            <td className="text-center">{raw.name}</td>
                                        </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </>
                    </table>
                </div>

            </Col>
            <CustomModal show={modalShow}
                         handleOnClose={handleClose}
                         title={data.title}
                         buttonText={data.buttonText}
                         size='lg'
                         id='attendanceapp'
                         body={
                             <AddUser
                                 data={data}
                                 errors={error}
                                 handleSubmit={submitForm}
                                 handleOnInputChange={handleOnInputChange}
                             />
                         }
                        />
        </Row>
    )
}