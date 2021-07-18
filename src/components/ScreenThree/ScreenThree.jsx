import "./ScreenThree.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function ScreenThree() {
const understandingReducer = useSelector((store) => store.understandingReducer);
const dispatch = useDispatch();
const history = useHistory();
const [understanding, setUnderstanding] = useState('');
const [answer, setAnswer] = useState(`${understandingReducer}`)

const historyTheClick = () => {
    event.preventDefault();
    history.push('/screentwo')
}

const handleTheClick = () => {
    event.preventDefault();

    dispatch({
        type: "SCREAMING_SNAKE-CABOB_CASE",
        payload: understanding  
    });

    history.push('/screenfour');

}
//This button handles the traversing pages and dispatching information. 
return(
<form onSubmit={handleTheClick}>
    <h1>On a scale of 1-10</h1>
    <h1>How well do you feel you understand this weeks content?</h1>
    <table>
        <tbody>
        <tr>
  <td><input value='1' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)} required/><h4>1</h4></td>
  <td><input value='2' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)} /><h4>2</h4></td>
  <td><input value='3' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)}/><h4>3</h4></td>
  <td><input value='4' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)} /><h4>4</h4></td>
  <td><input value='5' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)}/><h4>5</h4></td>
  <td><input value='6' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)} /><h4>6</h4></td>
  <td><input value='7' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)}/><h4>7</h4></td>
  <td><input value='8' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)} /><h4>8</h4></td>
  <td><input value='9' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)}/><h4>9</h4></td>
  <td><input value='10' type="radio" name='understanding' onChange={(evt) => setUnderstanding(evt.target.value)} /><h4>10</h4></td>
  <td>:</td>
  <td>{answer}</td>
  </tr>
  </tbody>
</table>
<button onClick={() => historyTheClick()}>Back</button>
    <button type='submit'>Next</button>
</form>
)
}

export default ScreenThree;