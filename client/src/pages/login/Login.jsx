import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./Login.css"
function Login() {
    const userRef = useRef();
    const passwordRef=useRef();
    const {user,dispatch,isFecthing}=useContext(Context);
    const handlesubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("/auth/login", {
              username: userRef.current.value,
              password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
          }
    };
    console.log(user);
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm"  onSubmit={handlesubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder='Enter you Username...'
                ref={userRef} />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder='Enter your password...'
                ref={passwordRef}/>
                <button className="loginButton" type='submit'>Login</button>
                <button className="loginRegisterButton">
                    <Link to="/register" className='link'>Register</Link>
                    </button>
            </form>
        </div>
    )
}

export default Login
