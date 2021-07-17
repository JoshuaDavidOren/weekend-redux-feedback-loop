import "./ScreenFour.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function ScreenFour() {

const history = useHistory();

const handleTheClick = () => {
    event.preventDefault();
    history.push('/screenfive');

}
//This button handles the traversing pages and dispatching information. 
return(
<section>
    <h1>Four</h1>
    <button onClick={() => handleTheClick()}>Next</button>
</section>
)
}

export default ScreenFour;