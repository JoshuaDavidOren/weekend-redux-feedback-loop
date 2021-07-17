import "./ScreenFive.css";
// import { useState } from "react";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


function ScreenFive() {
const dispatch = useDispatch();
const history = useHistory();
const feelingsReducer = useSelector((store) => store.feelingsReducer);
const understandingReducer = useSelector((store) => store.understandingReducer);
const supportReducer = useSelector((store) => store.supportReducer);
const commentsReducer = useSelector((store) => store.commentsReducer);

const historyTheClick = () => {
    event.preventDefault();
    history.push('/screenfour')
}

const handleTheClick = () => {
    event.preventDefault();
// axios call to send the feedback object to the database
    axios({
        method: 'POST',
        url: '/post',
        data: {
            feeling: feelingsReducer,
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
    // dispatch to reset the values of the reducers
    dispatch({
        type: 'SCREAMING_SNAKE_CASE',
        payload: ''
    });
    dispatch({
        type: "SCREAMING-CABOB-CASE",
        payload: ''
    });
    dispatch({
        type: "SCREAMING_SNAKE-CABOB_CASE",
        payload: ''
    });
    dispatch({
        type: "cameled_SCREAMS-with_SNAKES-and_CABOBS-case",
        payload: ''
    });
    history.push('/');

}
//This button handles the traversing pages and dispatching information. 
return(
<section>
    <table>
        <thead>
            <tr>
                <th>Questions</th>
                <th>Your Answers</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><h3>Feelings</h3></td>
                <td>{feelingsReducer}</td>
            </tr>
            <tr>
                <td><h3>Support</h3></td>
                <td>{supportReducer}</td>
            </tr>
            <tr>
                <td><h3>Understanding</h3></td>
                <td>{understandingReducer}</td>
            </tr>
            <tr>
                <td><h3>Comments</h3></td>
                <td>{commentsReducer}</td>
            </tr>
        </tbody>
    </table>
    <button onClick={() => handleTheClick()}>Next</button>
     <button onClick={() => historyTheClick()}>Back</button>
</section>
)
}

export default ScreenFive;