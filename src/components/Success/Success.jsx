import './Success.css'
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function Success () {

    const history = useHistory();

    const handleTheClick = () => {
    event.preventDefault();

    history.push('/');

}

    return (
        <section>
            <h1>Success</h1>
            <button onClick={() => handleTheClick()}>Leave more feedback?</button>
        </section>
    )
}

export default Success;