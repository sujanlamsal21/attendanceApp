import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CustomModal } from "./Helper";
import AddDeviceForm from "./AddDeviceForm";

export default function Devices(props) {
    const axios = props.axios;
    const [modalShow, setModelShow] = useState(false);
    const [error, setError] = useState({});
    const [data, setData] = useState({
        device_name: "",
        device_port: "",
        device_ip: "",
        title: "Add User",
        buttonText: "Submit"
    });
    const [details, setDetails]= useState([]);
    const handleClose = () => setModelShow(false);
    const handleShow = () => setModelShow(true);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(data, 'susuuhyu')
        const baseUrl = props.SERVER_DOMAIN + `/api/addDevice`
        axios.post(`${baseUrl}`, data)
            .then(response => {
                console.log(response.data, 'success');
                getAddDevices();
                handleClose();
            }).catch(error => {
                setError(error.response.data.errors)
                console.log(error.response, "error");
            });
    }

    const getAddDevices=()=>{
        const baseUrl = props.SERVER_DOMAIN + `/api/getDevices`
        axios.get(`${baseUrl}`)
            .then(response => {
                setDetails(response.data.data);
                console.log(response.data.data, 'success')
            }).catch(error => {
                console.log(error.response, "error");
            })
    }

    useEffect(()=>{
        getAddDevices();
    },[])

    const handleOnInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }



    return (
        <Row className="col-md-12">
            <Col className="col-md-12">
                <>
                    <div className='pull-right' style={{ marginBottom: "8px", float: 'right' }}>
                        <button className='btn btn-primary pull-right btn-flat'
                            onClick={handleShow}
                        >
                            Add Device
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
                                    <th className="col-md-2 text-center">Device id</th>
                                    <th className="col-md-2 text-center">Device Name</th>
                                    <th className="col-md-2 text-center">Device ip</th>
                                    <th className="col-md-2 text-center">Status</th>
                                    <th className="col-md-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    details?.map((raw,index)=>{
                                        return (
                                            <tr key={index}>
                                            <td className="text-center">{raw.id}</td>
                                            <td className="text-center">{raw.device_name}</td>
                                            <td className="text-center">{raw.device_ip}</td>
                                            <td className="text-center">{raw.status ? <span className="">Active</span> :  <span className="">InActive</span>}</td>
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
                    <AddDeviceForm
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