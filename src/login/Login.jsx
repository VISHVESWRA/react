import { useAuth } from "../auth/Auth";
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

    const { setIsloggedIn } = useAuth();
    const navigate = useNavigate();

    const handleLogIn = () => {
        setIsloggedIn(true);
        navigate('/list')
    }

    return(
        <div className="login">
        <button className="btn" onClick={handleLogIn}>Login</button>
        </div>

    )
    
}

export default Login;