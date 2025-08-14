import { useDispatch } from "react-redux";
import { fetchStudent } from "../api/Student";

function StudentList() {

    const dispatch = useDispatch()

    return (
        <>
            <h1>Student List</h1>
            <button onClick={() => dispatch(fetchStudent())}>Fetch</button>
        </>
    )
}

export default StudentList;