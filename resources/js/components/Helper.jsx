import {Button, Col, Form, Modal, Nav} from "react-bootstrap";

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
            <Modal.Footer>
                <Button variant="secondary"
                        className='pull-left btn-flat bg-red-active'
                        disabled={
                            props.cancelBtn ? 'disabled' : ''
                        }
                        onClick={props.handleOnClose}>
                    <i className="fa fa-times"/> Close
                </Button>
                {
                    props.buttonText ?
                        <Button variant="primary"
                                type='submit'
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
            controlId={props.input_name}
            style={props.formgroupStyle ? props.formgroupStyle : {minHeight: '35px'}}
            className={`text-right col-md-${element.classPartition}`}>
            {
                props.nolabel ? "" :
                    <Form.Label
                        // style={{paddingLeft:"1px !important"}}
                        className={`pull-left col-md-${element.labelClass} ${ props.required ? 'required' : '' }`}>
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