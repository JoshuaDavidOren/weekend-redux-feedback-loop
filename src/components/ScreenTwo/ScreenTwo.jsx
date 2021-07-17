import "./ScreenTwo.css";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";


function ScreenTwo() {
const dispatch = useDispatch();
const history = useHistory();

const handleTheClick = () => {
    event.preventDefault();

    dispatch({
        type: 'SCREAMING_SNAKE_CASE',
        payload: angry  
    });
    history.push('/screenthree');

}
//This button handles the traversing pages and dispatching information. 
return(
<form onSubmit={handleTheClick}>
    <h1>On a scale of 1-10</h1>
    <h1>How Angry are you Right now?</h1>
    <span>
  <input value='1' type="radio" name='angry'/><h4>1</h4>
  <input value='2' type="radio" name='angry' /><h4>2</h4>
  <input value='3' type="radio" name='angry'/><h4>3</h4>
  <input value='4' type="radio" name='angry' /><h4>4</h4>
  <input value='5' type="radio" name='angry'/><h4>5</h4>
  <input value='6' type="radio" name='angry' /><h4>6</h4>
  <input value='7' type="radio" name='angry'/><h4>7</h4>
  <input value='8' type="radio" name='angry' /><h4>8</h4>
  <input value='9' type="radio" name='angry'/><h4>9</h4>
  <input value='10' type="radio" name='angry' /><h4>10</h4>
</span>
    <button type='submit'>Next</button>
</form>
)
}

export default ScreenTwo;