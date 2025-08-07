import './App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './routing/AppRoutes'
import { AuthProvider } from './auth/Auth'
import TopNavigation from './nav/TopNav'


function App() {

  return (
    <>
    <BrowserRouter>
    <TopNavigation />
    <AuthProvider>
    <AppRouter />
    </AuthProvider>
    </BrowserRouter>
     </>
  )
}

export default App
