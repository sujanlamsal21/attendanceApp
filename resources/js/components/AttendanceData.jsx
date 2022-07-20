import {useState} from "react";
import { FormFilterSearchableSingleSelect } from "./Helper";


export default function AttendanceData(props) {

    const [value, setValue]=useState("");

    const Option = [
        {
            value:"today",
            label:"Today"
        },
        {
            value:"this_week",
            label:"This Week"
        }
    ]

    const handleMonthFilterChange = () => {

    }
    return (
        <div className="container">
            <div className="box">
                <div className="box-header">
                    <div className="row" style={{margin: "10px"}}>
                    <label htmlFor="filterBy" className="col-sm-1 control-label" style={{ padding: "0px" }}>Filter
                        By:</label>
                    <div className="col-sm-3 row">
                        <FormFilterSearchableSingleSelect
                            input_name="Date"
                            label="Date"
                            class="12"
                            options={Option}
                            required={false}
                            handleChangeValue={handleMonthFilterChange}
                        />
                    </div>
                    </div>
                </div>
                <div className="box-body">
                    <table className="table table-bordered table-fit table-condensed" style={{ marginLeft: '10px' }}>
                        <>
                            <thead>
                                <tr>
                                    <th className="col-md-2 text-center">Attendance id</th>
                                    <th className="col-md-2 text-center">Emploee Name</th>
                                    <th className="col-md-2 text-center">Device ip</th>
                                    <th className="col-md-2 text-center">Date</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </>
                    </table>
                </div>
            </div>
        </div>
    )
}