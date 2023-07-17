import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewExcercise = (props) => {
  const { id } = useParams();
  const [allExcercises, setAllExcercises] = useState([]);
  const [excerciseTitle, setExcerciseTitle] = useState("");
  const [excerciseReps, setExcerciseReps] = useState("");
  const [excerciseSets, setExcerciseSets] = useState("");
  const [errors, setErrors] = useState({});
  const [excerciseNotFoundError, setExcerciseNotFoundError] = useState("");
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/excercise/${id}`)
      .then((response) => {
        console.log("here",response.data);
        setAllExcercises(response.data);
        setExcerciseTitle(response.data.excerciseTitle);
        setExcerciseReps(response.data.excerciseReps);
        setExcerciseSets(response.data.excerciseSets);
      })
      .catch((err) => {
        console.log(err.response);
        setExcerciseNotFoundError(`Excercise not found using that ID`);
      });
  }, []);

  
  return (
    <div className ="container">
        {excerciseNotFoundError ? (
        <h2>
            {excerciseNotFoundError} <Link to="/new">Click here to add Excercise</Link>
        </h2>
        ) : null}
        <Link to="/" style={{margin: '50px'}}>Home</Link>
        
        
          <div style={{margin: '50px'}} className = "form-group">
            
            <h1>{allExcercises.title}</h1>
          </div>
          <div style={{margin: '50px'}} className = "form-group">
            
            <h1>{allExcercises.reps} Reps</h1>
          </div>
              
            <div style={{margin: '50px'}} className = "form-group">
              
              <h1>{allExcercises.sets} Sets</h1>
            </div>
              
        
        
    </div>
  );
};

export default ViewExcercise;