import { useDispatch, useSelector } from "react-redux";
import { getCar, postCar } from "../api/CarList";
import { useEffect } from "react";

function CarList() {

    const dispatch = useDispatch();
    const { cars } = useSelector((state) => state)

    useEffect(() => {
        dispatch(getCar());
    }, [dispatch])

    const sendData = () => {
        dispatch(postCar({
            name: "Tata",
            model: "Punch",
            price: 50000
        }))
    }

    return (
        <>
            <ol>
                {cars?.type.map((car) => (
                    <li key={car.price}>
                        <div>{car.name}</div>
                        <div>{car.model}</div>
                        <div>{car.price}</div>
                    </li>
                ))}
            </ol>

            <button onClick={sendData}>Click</button>

        </>
    )
}

export default CarList;