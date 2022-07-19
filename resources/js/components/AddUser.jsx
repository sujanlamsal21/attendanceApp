import React from 'react';
import {Form, Row} from "react-bootstrap";
import {FormItem} from "./Helper";
const AddUser = (props) => {
    return (
        <div>
            <Form onSubmit={props.handleSubmit}
                  className='form-horizontal'
                  id='attendanceapp-form'>
                <Row>
                    <FormItem input_name="name"
                              class='12'
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.name}
                              errors={props.errors.name ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                     <FormItem input_name="attendance_id"
                              class='12'
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.attendance_id}
                              errors={props.errors.attendance_id ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                     <FormItem input_name="password"
                              class='12'
                              type="password"
                              labelClassPartation='2'
                              inputDivClassPartation='10'
                              required={true}
                              value={props.data.password}
                              errors={props.errors.password ?? ''}
                              handleChange={props.handleOnInputChange}
                    />
                </Row>
            </Form>
        </div>
    )
}
export default AddUser;