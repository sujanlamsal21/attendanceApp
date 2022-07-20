import {useState,useEffect} from "react";
import {Form, Row} from "react-bootstrap";
import { FormItem } from "./Helper";


export default function Setting(props){
    const axios = props.axios;
    const [website, setWebsite] = useState({
        website_name:""
    })
    const [submitting, setSubmitting]= useState(false)

    const submitData=(e)=>{
        e.preventDefault();
        const baseUrl = props.SERVER_DOMAIN + `/api/websiteDetails`
        axios.post(`${baseUrl}`, website)
            .then(response => {
                console.log(response.data.data, 'success')
                getSettingsDetail();
            }).catch(error => {
                console.log(error);
    });
}

  const getSettingsDetail=()=>{
    const baseUrl = props.SERVER_DOMAIN + `/api/setting`
    axios.get(`${baseUrl}`)
        .then(response => {
            console.log(response.data.data.value, 'success')
            let data = response.data.data.value
            setWebsite({website_name:data});
        }).catch(error => {
            console.log(error);
});
  }

  useEffect(()=>{
    getSettingsDetail();
  },[])

    return (
        <div className="container">
<div className="box">
        <div className="box-body">
                <Row>
                    <FormItem
                        input_name='website_name'
                        value={website.website_name}
                        handleChange={(e) => setWebsite({website_name:e.target.value})}
                    />
                </Row>
                <div className="box-footer margin">
                    <button style={{marginTop: "20px", marginLeft:"20px"}} type="submit"
                            className="btn btn-primary btn-flat pull-right"
                            onClick={submitData}
                            >
                        {submitting ?
                        <><i className="fa fa-spinner fa-spin"/> Please wait...</>
                        : "Submit"
                    }

                    </button>
                </div>
        </div>
    </div>
        </div>
    )
}