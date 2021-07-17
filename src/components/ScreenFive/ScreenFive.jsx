import "./ScreenFive.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import axios from "axios";


function ScreenFive() {

const history = useHistory();

const handleTheClick = () => {
    event.preventDefault();
// axios call to send the feedback object to the database
    axios({
        method: 'POST',
        url: '/',
        data: {
            feeling: feelingReducer,
            understanding: understandingReducer,
            support: supportReducer, 
            comments: commentsReducer
        },
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log('axios Post error', err);
    });
    
    history.push('/');

}
//This button handles the traversing pages and dispatching information. 
return(
<section>
    <h1>Five</h1>
    <button onClick={() => handleTheClick()}>Next</button>
</section>
)
}

export default ScreenFive;