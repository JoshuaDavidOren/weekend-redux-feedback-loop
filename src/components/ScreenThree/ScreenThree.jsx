import "./ScreenThree.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function ScreenThree() {

const history = useHistory();

const handleTheClick = () => {
    event.preventDefault();
    history.push('/screenfour');

}
//This button handles the traversing pages and dispatching information. 
return(
<section>
    <h1>Three</h1>
    <button onClick={() => handleTheClick()}>Next</button>
</section>
)
}

export default ScreenThree;