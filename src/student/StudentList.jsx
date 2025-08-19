import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editPassword, fetchStudent, signUp, signin } from "../api/Student";
import "./StudentList.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function StudentList() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [newRegister, setNewRegister] = useState(false)

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch])

  const { list } = useSelector((state) => state.student)

  const newFetch = () => {
    setNewRegister(pre => !pre);
  }

  const signUpUser = (data) => {
    console.log(data);
    dispatch(signUp(data));
    dispatch(fetchStudent())
    setNewRegister(pre => !pre);
    reset();
  };

  const signIn = (data) => {
    dispatch(signin(data));
    reset()
  };

  const deleteID = (data) => {
    console.log(data);
    dispatch(deleteUser(data))
    dispatch(fetchStudent())
  }

  const editID = (data) => {
    dispatch(editPassword(data))
    dispatch(fetchStudent())
  }

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
        <>
          {
            newRegister &&
            <input type="text" id="id" placeholder="User ID" {...register("id", { required: "Required" })} />
          }
          {errors.id && <p>{errors.id.message}</p>}
        </>
        {
          newRegister &&
          <input type="number" id="age" placeholder="Age" {...register("age")} />
        }
        <>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </>
        <>
          {
            !newRegister &&
            <span style={{ color: 'blue', fontSize: '14px', textDecoration: 'underline' }} onClick={newFetch}>Create Account</span>
          }
        </>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {
            newRegister &&
            <button type="submit" onClick={handleSubmit(signUpUser)}>
              Sign Up
            </button>
          }
          {
            !newRegister &&
            <button type="submit" onClick={handleSubmit(signIn)}>
              Login
            </button>
          }
        </div>
      </form>

      <div className="message" id="message"></div>

      <h1>Student List</h1>
      <>
        <ol>
          {list.map((user) => (
            <li key={user.id}>
              <div>Name: {user.name}</div>
              <div>Password: {user.password}</div>
              <div>Age: {user.age}</div>
              <div>ID: {user.id}</div>
              <br />

              <div style={{ border: '1px solid red', width: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span onClick={() => deleteID({ id: user.id })}>Delete</span>
              </div>
              <div style={{ border: '1px solid green', width: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span onClick={() => editID({ id: user.id, password: '12345678' })}>Edit</span>
              </div>
            </li>
          ))}
        </ol>

      </>
    </>
  );
}

export default StudentList;
