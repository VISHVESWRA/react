import { Routes, Route } from 'react-router-dom'
import Login from '../login/Login'
import List from '../list/list'
import MyForm from '../list/Form'
import Card from '../list/Card'
import CartPage from '../list/CartPage'

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/list' element={<List />} />
            <Route path='/form' element={<MyForm />} />
            <Route path='/form/:id' element={<MyForm />} />
            <Route path='/card' element={<Card />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    )
}

export default AppRouter;