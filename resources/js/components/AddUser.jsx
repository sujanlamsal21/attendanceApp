import React,{useState, useEffect} from "react";
import {Form, Row} from "react-bootstrap";
import {FormItem} from "./Helper";
const AddUser = (props) => {
    return (
        <div>
            <Form onSubmit={props.handleSubmit}
                  className='form-horizontal'
                  id='attendanceapp-form'>
                <Row>
                    <FormItem input_name="device_name"
                              class='12'
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.device_name}
                              errors={props.errors.device_name ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                     <FormItem input_name="device_id"
                              class='12'
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.device_id}
                              errors={props.errors.device_id ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                     <FormItem input_name="device_port"
                              class='12'
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.device_port}
                              errors={props.errors.device_port ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                </Row>
            </Form>
        </div>
    )
}
export default AddUser;