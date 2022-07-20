import React from 'react';
import {Form, Row} from "react-bootstrap";
import {FormItem} from "./Helper";
const AddDeviceForm = (props) => {
    return (
        <div className='container'>
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
                              errors={props.errors?.name ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                     <FormItem input_name="device_ip"
                              class='12'
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.device_ip}
                              errors={props.errors?.ip ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                     <FormItem input_name="device_port"
                              class='12'
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.device_port}
                              errors={props.errors?.port ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                </Row>
            </Form>
        </div>
    )
}
export default AddDeviceForm;