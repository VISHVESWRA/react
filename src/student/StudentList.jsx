import { useDispatch } from "react-redux";
import { fetchStudent, postData } from "../api/Student";

function StudentList() {

    const dispatch = useDispatch()

    const newData = {
        "name": "Anito",
        "id": "S004",
        "age": 21
    }

    return (
        <>
            <h1>Student List</h1>
            <button onClick={() => dispatch(fetchStudent())}>Fetch</button>
            <button onClick={() => dispatch(postData(newData))}>Post</button>
        </>
    )
}

export default StudentList;