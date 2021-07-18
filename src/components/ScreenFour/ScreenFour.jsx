import "./ScreenFour.css";
import { useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function ScreenFour() {
const commentsReducer = useSelector((store) => store.commentsReducer);
const dispatch = useDispatch();
const history = useHistory();
const [comments, setComments] = useState('');
const [answer, setAnswer] = useState(`${commentsReducer}`)

const historyTheClick = () => {
    event.preventDefault();
    history.push('/screenthree')
}

const handleTheClick = () => {
    event.preventDefault();

    dispatch({
        type: "cameled_SCREAMS-with_SNAKES-and_CABOBS-case",
        payload: comments  
    });

    history.push('/screenfive');

}
//This button handles the traversing pages and dispatching information. 
return(
<section>
    <h1>Leave a comment on how you feel</h1>
    <input type="text" placeholder='Put your thoughts here' onChange={(evt) => setComments(evt.target.value)}/>
    <p>{answer}</p>
   <button onClick={() => historyTheClick()}>Back</button>
   <button onClick={() => handleTheClick()}>Next</button>
</section>
)
}

export default ScreenFour;