import "./ScreenTwo.css";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


function ScreenTwo() {
const supportReducer = useSelector((store) => store.supportReducer);
const dispatch = useDispatch();
const history = useHistory();
const [support, setSupport] = useState('');
const [answer, setAnswer] = useState(`${supportReducer}`)

const historyTheClick = () => {
    event.preventDefault();
    history.push('/')
}

const handleTheClick = () => {
    event.preventDefault();

    dispatch({
        type: 'SCREAMING_SNAKE_CASE',
        payload: support  
    });

    history.push('/screenthree');

}
//This button handles the traversing pages and dispatching information. 
return(
<form onSubmit={handleTheClick}>
    <h1>On a scale of 1-10</h1>
    <h1>How supported do you feel?</h1>
    <table>
        <tbody>
        <tr>
  <td><input value='1' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)} required/><h4>1</h4></td>
  <td><input value='2' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)} /><h4>2</h4></td>
  <td><input value='3' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)}/><h4>3</h4></td>
  <td><input value='4' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)} /><h4>4</h4></td>
  <td><input value='5' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)}/><h4>5</h4></td>
  <td><input value='6' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)} /><h4>6</h4></td>
  <td><input value='7' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)}/><h4>7</h4></td>
  <td><input value='8' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)} /><h4>8</h4></td>
  <td><input value='9' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)}/><h4>9</h4></td>
  <td><input value='10' type="radio" name='support' onChange={(evt) => setSupport(evt.target.value)} /><h4>10</h4></td>
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

export default ScreenTwo;