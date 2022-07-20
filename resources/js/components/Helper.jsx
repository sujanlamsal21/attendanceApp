import {Button, Col,Row, Form, Modal, Nav} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";
import MySelect from "./MySelect";

export function CustomModal(props) {

    return (
        <Modal
            show={props.show}
            size={props.size ? props.size : 'lg'}
            onHide={props.handleOnClose}
            centered
        >
            <Modal.Header style={props.style}>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer style={{display:"block"}}>
                <Button variant="secondary"
                        className='pull-left btn-flat bg-red-active'
                        disabled={
                            props.cancelBtn ? 'disabled' : ''
                        }
                        style={{backgroundColor:"red"}}
                        onClick={props.handleOnClose}>
                    <i className="fa fa-times"/> Close
                </Button>
                {
                    props.buttonText ?
                        <Button variant="primary"
                                type='submit'
                                style={{float:"right"}}
                                disabled={props.disabled}
                                form={`${props.id}-form`}
                                className='pull-right btn-flat'
                        >
                            {props.disabled ?
                                <><i className="fa fa-spinner fa-spin"/> Please wait...</>
                                : props.buttonText
                            }

                        </Button> : ''
                }
            </Modal.Footer>
        </Modal>

    );
}

export const FormItem = (props) => {
    const element = inputFieldNamingConvention(props);
    const myStyle = props.myStyle ? props.myStyle : ""
    return (
        <Form.Group
            as={Row}
            controlId={props.input_name}
            style={props.formgroupStyle ? props.formgroupStyle : {minHeight: '35px',marginTop:"20px"}}
            className={`col-md-${element.classPartition}`}>
            {
                props.nolabel ? "" :
                    <Form.Label
                        style={{textAlign:"right"}}
                        className={`col-md-${element.labelClass} ${ props.required ? 'required' : '' }`}>
                        {props.label || element.labelName}
                        {props.extraLabel ? props.extraLabel : ''} :
                    </Form.Label>
            }
            <div className={`col-md-${element.controlClass} ${props.errors ? 'has-error' : ''}`}>
                <Form.Control type={props.type ? props.type : 'text'}
                              readOnly={props.readonly ?? false}
                              name={props.input_name}
                              placeholder={props.placeholder ? props.placeholder : `Enter ${element.labelName}`}
                              value={props.value || ''}
                              step={props.step || ''}
                              style={props.style}
                              min={props.min}
                              maxLength={props.maxlength}
                              onChange={props.handleChange}
                />
                {
                    props.errors ?
                        <Form.Text className="pull-left" type="invalid" style={{color: '#e44d4d'}}>
                            {props.errors}
                        </Form.Text>
                        : null
                }
            </div>
        </Form.Group>
    )
}

export const FormSelect = (props) => {
    let placehoderDefault = props?.placeholder;
    const padding = props.padding ?? '';
    const element = inputFieldNamingConvention(props)
    return (
        <Form.Group
             as={Row}
            controlId={props.input_name}
            style={{minHeight: '35px'}}
            className={`text-right col-md-${element.classPartition}`}>
            <Form.Label className={`col-md-${element.labelClass} ${props.required ? 'required' : ''}`}>
                {props.label ? props.label : element.labelName}:
            </Form.Label>
            <div className={`col-md-${element.controlClass} ${props.errors ? ' has-error' : ''}`} style={{
                paddingRight: padding
            }}>
                <Form.Control
                    type={props.type ? props.type : 'text'}
                    as={'select'}
                    name={props.input_name}
                    placeholder={placehoderDefault ?? `Enter ${element.labelName}`}
                    value={props.value || ''}
                    onChange={props.handleChange}
                    disabled={props.readOnly ? props.readOnly : false}
                >
                    <option key={props.name}
                            value="">
                        Select {props.label ? props.label : element.labelName}
                    </option>
                    {props.options.length > 0 ? createSelectItems(props.options) : ""}
                </Form.Control>
                {
                    props.errors ?
                        <Form.Text className="pull-left" type="invalid" style={{color: '#e44d4d'}}>
                            {props.errors}
                        </Form.Text>
                        : null
                }
            </div>
        </Form.Group>
    )
}

export function FormFilterSearchableSingleSelect(props){
    const [val,setVal]=useState([]);
    const handleOnChange=(selectedValue)=>{
        setVal(selectedValue);
        if(props.handleChangeValue){
             props.handleChangeValue(selectedValue);
        }
    }
    return (
            <div className={`col-md-${props.class} ${props.errors ? ' has-error' : ''}`}>
                <MySelect
                    className={`basic-single ${props.errors ? "border-red":""}`}
                    classNamePrefix="select employee"
                    isClearable={true}
                    isSearchable={true}
                    name="common"
                    options={props.options}
                    placeholder={`Enter ${props.label}`}
                    value={val}
                    onChange={handleOnChange}
                />
            </div>
    )
}


function inputFieldNamingConvention(props) {
    const words = props.input_name && props.input_name.split("_");
    const str = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    const classPartition = props.class ? props.class : 6;
    const labelClass = props.labelClassPartation ? props.labelClassPartation : classPartition === 6 ? 4 : 5;
    const controlClass = props.inputDivClassPartation ? props.inputDivClassPartation : 12 - labelClass
    return {
        labelName: str,
        classPartition: classPartition,
        labelClass: labelClass,
        controlClass: controlClass
    }
}
