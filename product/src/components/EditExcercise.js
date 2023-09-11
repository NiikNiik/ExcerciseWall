import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditExcercise = (props) => {
  const { id } = useParams();
  
  const [excerciseTitle, setExcerciseTitle] = useState("");
  const [excerciseReps, setExcerciseReps] = useState("");
  const [excerciseSets, setExcerciseSets] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [excerciseNotFoundError, setExcerciseNotFoundError] = useState("");
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/excercise/${id}`)
      .then((response) => {
        console.log(response.data);
        
        setExcerciseTitle(response.data.title);
        setExcerciseReps(response.data.reps);
        setExcerciseSets(response.data.sets);
      })
      .catch((err) => {
        console.log(err.response);
        setExcerciseNotFoundError(`Excercise not found using that ID`);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/excercise/${id}`, { title: excerciseTitle ,  reps: excerciseReps ,sets:excerciseSets})
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
    <div className="contanier">
        <div className="row">
        <div className="col-4">
    <form onSubmit={submitHandler}>
      {/*{excerciseNotFoundError ? (
        <h2>
          {excerciseNotFoundError} <Link to="/new">Click here to add Excercise</Link>
        </h2>
      ) : null}*/}
      <Link to="/" style={{margin: '50px'}}>Home</Link>
      <div>
      <div className="form-group" >
        <div style={{margin: '50px'}}>
        <label htmlFor="excerciseTitle">Excercise Title</label>
        <input
          style={{marginLeft: '10px'}}
          size="1"
          type="text"
          id="excerciseTitle"
          defaultValue={excerciseTitle}
          onChange={(e) => setExcerciseTitle(e.target.value)}
        />
        </div>
        <div className = "form-group"  style={{margin: '50px'}}>
        <label htmlFor="excerciseReps">Amount of Reps</label>
        <input  
          style={{marginLeft: '10px'}}
          size="1"
          id="excerciseReps"
          onChange={(e) =>  setExcerciseReps(e.target.value)} 
          type = "text"
          defaultValue={excerciseReps}
        />
        
        </div>
        <div className = "form-group" style={{margin: '50px'}} >
        <label htmlFor="excerciseSets">Amount of Sets</label>
        <input  
          style={{marginLeft: '10px'}}
          size="1"
          type = "text"
          id="excerciseSets" 
          defaultValue={excerciseSets}
          onChange={(e) => setExcerciseSets(e.target.value)}>
        </input>
        </div>
        
        {errors.excercise ? <p>{errors.excercise.message}</p> : null}
      </div>
      <button type="submit" style={{margin: '50px'}} className="btn btn-primary">
        SUBMIT
      </button>
      </div>
    </form>
      </div>
    </div>
  </div>
  );
};

export default EditExcercise;