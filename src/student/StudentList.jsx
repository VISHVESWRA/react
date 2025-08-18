import { useDispatch } from "react-redux";
import { fetchStudent, postData } from "../api/Student";
import './StudentList.css'
import { useForm } from "react-hook-form";

function StudentList() {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: errors } = useForm();

    const newData = {
        "name": "Anito",
        "id": "S004",
        "age": 21,
        "password": "pass123"
    }

    const submit = (data) => {
        console.log(data);
        dispatch(postData(data))
    }

    return (
        <>
            <h2>User Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" id="name" placeholder="Name" {...register('name', { required: 'Required' })} />
                {errors.name && <p>{errors.name.message}</p>}
                <input type="text" id="id" placeholder="User ID"  {...register('id')} />
                <input type="number" id="age" placeholder="Age"  {...register('age')} />
                <input type="password" id="password" placeholder="Password"  {...register('password')} />
                <button type="submit">Login</button>
            </form>

            <div className="message" id="message"></div>

            <h1>Student List</h1>
            <button onClick={() => dispatch(fetchStudent())}>Fetch</button>
            <button onClick={() => dispatch(postData(newData))}>Post</button>
        </>
    )
}

export default StudentList;