import { useDispatch, useSelector } from "react-redux";
import { getCar, postCar } from "../api/CarList";
import { useEffect } from "react";

function CarList() {

    const dispatch = useDispatch();
    const { cars } = useSelector((state) => state)
    const min = 1;
    const max = 100;

    useEffect(() => {
        dispatch(getCar());
    }, [dispatch])

    const sendData = () => {
        dispatch( postCar({
            id: Math.floor(Math.random() * (max - min + 1)) + min,
            name: "Tata",
            model: "Punch",
            price: 50000
        }))
        dispatch(getCar())
    }

    return (
        <>
            <ol>
                {cars?.type.map((car) => (
                    <li key={car.id}>
                        <div>{car.id}</div>
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