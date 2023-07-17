import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ExcerciseForm = (props) => {
  const [excerciseTitle, setExcerciseTitle] = useState("");
  const [excerciseReps, setExcerciseReps] = useState("");
  const [excerciseSets, setExcerciseSets] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/excercise", { 
        title: excerciseTitle, 
        reps: excerciseReps,
        sets: excerciseSets
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Link to="/" style={{margin: '50px'}}>Home</Link>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{margin: '50px'}}>
              <label htmlFor="excerciseTitle">Title</label>
              <input 
                style={{marginLeft: '10px'}}
                type="text"
                className="form-control"
                onChange={(e) => setExcerciseTitle(e.target.value)}
                value={excerciseTitle}
                size="15"
              />
              {errors?.title && <span>{errors.title.message}</span> }
            </div>
            <div className = "form-group"  style={{margin: '50px'}}>
            <label htmlFor="excerciseReps"> Number of Reps</label>
              <input  
                style={{marginLeft: '10px'}}
                size="1"
                id="excerciseReps" 
                value={excerciseReps} 
                onChange={(e) => setExcerciseReps(e.target.value)}>
              </input>
              {errors?.reps && <span>{errors.reps.message}</span> }
            </div>
            <div className = "form-group"  style={{margin: '50px'}}>
            <label htmlFor="excerciseSets"> Number of Sets</label>
              <input 
                style={{marginLeft: '10px'}}
                size="1" 
                id="excerciseSets" 
                value={excerciseSets} 
                onChange={(e) => setExcerciseSets(e.target.value)}>
              </input>
              {errors?.sets && <span>{errors.sets.message}</span> }
            </div>
            <button style={{margin: '50px'}} className="btn btn-primary" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExcerciseForm;