import { Link } from 'react-router-dom';
import { useContext } from "react";
import {Context} from "../../context/Context"
import "./Topbar.css"
export default function Topbar() {
    const {user,dispatch}=useContext(Context);

    const handlesubmit=(e)=>{
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className='link'>Home</Link></li>
                    <li className="topListItem"> <Link to="/" className='link'>About</Link></li>
                    <li className="topListItem"> <Link to="/contact" className='link'>Contact</Link></li>
                    <li className="topListItem"> <Link to="/write" className='link'>Write</Link></li>
                    <li className="topListItem" onClick={handlesubmit}>{user&& "Logout"}</li>
                </ul>
                </div>
            <div className="topRight">
                {user?(
                    <Link to="/settings">
                <img 
                className="topImg" 
                src= {user.profilePic}
                alt=" "/>
                </Link>):
                
                (
                <ul className='topList'>
                    <li className='topListItem'>
                    <Link to="/login" className='link'>Login</Link>
                    </li>
                    <li className='topListItem'>
                    <Link to="/register" className='link'>Register</Link>
                    </li>
                </ul>
                )}
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
           
        </div>
    )
}
