import {useState} from "react";
import {Form, Row} from "react-bootstrap";
import { FormItem } from "./Helper";


export default function Setting(){
    const [website, setWebsite] = useState("")
    const [submitting, setSubmitting]= useState(false)

    const submitData=()=>{

    }

    return (
        <div className="box">
        <div className="box-body">
            <Form onSubmit={submitData}>
                <Row>
                    <FormItem
                        input_name='Website-name'
                        value={website}
                        handleChange={(e) => setWebsite(e.target.value)}
                    />
                </Row>
                <div className="box-footer margin">
                    <button style={{marginTop: "20px"}} type="submit"
                            className="btn btn-primary btn-flat pull-right">
                        {submitting ?
                        <><i className="fa fa-spinner fa-spin"/> Please wait...</>
                        : "Submit"
                    }

                    </button>
                </div>
            </Form>
        </div>
    </div>
    )
}