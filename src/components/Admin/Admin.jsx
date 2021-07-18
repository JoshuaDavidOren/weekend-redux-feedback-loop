import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';

function Admin () {

const [feedBack, setFeedBack] = useState([])

  useEffect(() => {
      getFeedback();
  }, [])

  const deleteThis = (index) => {
    // event.preventDefault();

   axios.delete(`/delete/${index}`)
   .then((response) => {
       console.log('Delete',response);
        getFeedback();
   })
   .catch((err) => {
       console.log('DELETE error', err);
   });   
  };

const getFeedback = () => {
   event.preventDefault();

    axios.get("/get")
      .then((response) => {
        console.log(response.data); 
        setFeedBack(response.data);
      })
      .catch((err) => {
        console.log('GET feedback error',err);
      });
  };

    return(

        <section>
            <h1>admin</h1>
            <table>
        <tbody>
            {feedBack.map((each, index) =>
            <tr key={index}>
                <td><h3>Feelings</h3></td>
                <td>{each.feeling}</td>
            
                <td><h3>Support</h3></td>
                <td>{each.support}</td>
            
                <td><h3>Understanding</h3></td>
                <td>{each.understanding}</td>
            
                <td><h3>Comments</h3></td>
                <td>{each.comments}</td>

                <td><h3>Flagged</h3></td>
                <td>{String(each.flagged)}</td> 

                <td><h3>Date</h3></td>
                <td> {moment(each.date).format('MMMM Do YYYY')};</td>

                 <td><h3>Delete</h3></td>
                <td> <button onClick={(event) => deleteThis(each.id)}>Bye</button></td>
            </tr>
            )}
        </tbody>
    </table>
        </section>
    )
}

export default Admin;