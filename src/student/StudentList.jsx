import { useDispatch } from "react-redux";
import { fetchStudent, postData, signin } from "../api/Student";
import "./StudentList.css";
import { useForm } from "react-hook-form";

function StudentList() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = (data) => {
    console.log(data);
    dispatch(postData(data));
  };

  const signIn = (data) => {
    console.log(data);
    dispatch(signin(data));
  };

  return (
    <>
      <h2>User Login</h2>
      <form>
        <>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: "Required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </>
        <input type="text" id="id" placeholder="User ID" {...register("id")} />
        <input type="number" id="age" placeholder="Age" {...register("age")} />
        <>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <button type="submit" onClick={handleSubmit(signUp)}>
            Sign Up
          </button>
          <button type="submit" onClick={handleSubmit(signIn)}>
            Login
          </button>
        </div>
      </form>

      <div className="message" id="message"></div>

      <h1>Student List</h1>
      <button onClick={() => dispatch(fetchStudent())}>Fetch</button>
      {/* <button onClick={() => dispatch(postData(newData))}>Post</button> */}
    </>
  );
}

export default StudentList;
