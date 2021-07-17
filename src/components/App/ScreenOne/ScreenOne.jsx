import "./ScreenOne.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { HashRouter as useHistory } from 'react-router-dom';


function ScreenOne() {

const history = useHistory();

const handleTheClick = () => {
    event.preventDefault();
    history.push('/screentwo');

}
//This button handles the traversing pages and dispatching information. 
return(
<section>
    <h1>One</h1>
    <button onClick={() => handleTheClick()}>Next</button>
</section>
)
}

export default ScreenOne;