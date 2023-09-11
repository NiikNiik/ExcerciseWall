import { useEffect, useState } from "react";

import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const DisplayAll = (props) => {
  const [allExcercises, setAllExcercises] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/excercise")
      .then((response) => {
        console.log(response.data);
        setAllExcercises(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleDeleteExcercise = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/excercise/${idFromBelow}`)
      .then((response) => {
        console.log("success deleting excercise");
        console.log(response);
        const filteredExcercises = allExcercises.filter((excercise) => {
          return excercise._id !== idFromBelow;
        });
        setAllExcercises(filteredExcercises);
      })
      .catch((err) => {
        console.log("error deleting excercise", err.response);
      });
  };
  return (
    <div className="container">
      <div className="row">
          <table className="table" style={{marginTop: '50px', marginLeft: '575px'}}>
            <thead >
              <tr>
              <th scope="col" ><h1 style={{margin: '10px'}}>Excercise</h1></th>
              <th scope="col"> <h2 style={{margin: '10px'}} >Amount of Reps/Sets</h2></th>
              <th scope="col"> <h2 style={{margin: '10px'}} > Actions</h2></th>
              </tr>
            </thead>
            <tbody>
              {allExcercises.map((excercise, index) => {
                return (
                  <tr key={excercise._id}>
                    <td><h3>{excercise.title}</h3></td>
                    <td>{excercise.reps} reps/{excercise.sets} sets</td>
                    <td>
                      <Link to={`/edit/${excercise._id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDeleteExcercise(excercise._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <Link to={`/view/${excercise._id}`}>
                        <button className="btn btn-primary">View</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        <div>
          <Link to="/new" style={{marginLeft: '800px'}}>Add a new Excercise</Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayAll;