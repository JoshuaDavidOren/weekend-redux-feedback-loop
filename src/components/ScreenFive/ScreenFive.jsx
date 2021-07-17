import "./ScreenFive.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { HashRouter as useHistory } from 'react-router-dom';


function ScreenFive() {

const history = useHistory();

const handleTheClick = () => {
    event.preventDefault();
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