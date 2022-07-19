import ReactDOM from 'react-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router
         ,Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';
import Setting from "./components/Setting";
import Devices from "./components/Devices";

axios.defaults.withCredentials = true;
const SERVER_DOMAIN = window.location.origin;


function App() {
    const [attendanceDetails, setAttendanceDetails] = useState({})

    // const getAllAttendanceDetails = () => {
    //     const baseUrl = SERVER_DOMAIN + `/api/attendanceDetails`
    //     axios.get(`${baseUrl}`)
    //         .then(response => {
    //             console.log(response.data, 'success')
    //         }).catch(error => {
    //             console.log(error.response, "error");
    //         });
    // }

    // useEffect(() => {
    //     getAllAttendanceDetails();
    // })

    return (
        <>
       
        <Router>
                <Header />
            <Routes>
                <Route path='/' element={<Home 
                 SERVER_DOMAIN={SERVER_DOMAIN}
                 axios={axios}
                />} />
                <Route path='/setting' element={<Setting 
                  SERVER_DOMAIN={SERVER_DOMAIN}
                  axios={axios}
                />} />
                <Route path='/devices' element={<Devices 
                 SERVER_DOMAIN={SERVER_DOMAIN}
                 axios={axios}
                />} />
            </Routes>
        </Router>
        </> 
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

