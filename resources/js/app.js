import ReactDOM from 'react-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router
         ,Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';
import ListUser from "./components/ListUser";
import Setting from "./components/Setting";

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
                <Route path='/' element={<Home />} />
                <Route path='/list-user' element={<ListUser />} />
                <Route path='/setting' element={<Setting />} />
            </Routes>
        </Router>
        </> 
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

