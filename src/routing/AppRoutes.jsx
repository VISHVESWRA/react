import { Routes, Route } from 'react-router-dom'
import Login from '../login/Login'
import List from '../list/list'
import MyForm from '../list/Form'
import Card from '../list/Card'
import CartPage from '../list/CartPage'
import StudentList from '../student/StudentList'
import CarList from '../carmodal/Car'

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/list' element={<List />} />
            <Route path='/form' element={<MyForm />} />
            <Route path='/form/:id' element={<MyForm />} />
            <Route path='/card' element={<Card />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/student' element={<StudentList />} />
            <Route path='/carList' element={<CarList />} />
        </Routes>
    )
}

export default AppRouter;