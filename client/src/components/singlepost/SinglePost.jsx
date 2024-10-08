import React from 'react'
import { useEffect,useState,useContext } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Context} from "../../context/Context"
import "./SinglePost.css"
function SinglePost() {
    const location=useLocation();
    const path=location.pathname.split("/")[2];
    const [post,setPost]=useState({});
    const PF = "http://localhost:5000/images/";
    const {user}=useContext(Context);
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [updateMode,setUpdateMode]=useState(false);
    useEffect(()=>{
        const getpost=async()=>{
            const res=await axios.get("/posts/"+path);
            console.log(res);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getpost();
    },[path]);
    
const handledelete=async()=>{
    try{
        await axios.delete("/posts/"+path,{data:{username:user.username}});
        window.location.replace("/");
    }catch(err){

    }

    
};

const handleUpdate=async()=>{
    try{
        await axios.put(`/posts/${post._id}`,{
            username:user.username,title:title,desc
        })
        setUpdateMode(false);
    }
catch(err){

}
}
    return (
        <div className='singlepost'>
            <div className="singlePostWrapper">
                {post.photo && (<img src={PF+ post.photo} 
                alt="" 
                className="singlePostImg" />
                )}
                {updateMode ?
                <input type="text" 
                value={title} 
                className="singlePostTitleInput" 
                onChange={(e)=>{setTitle(e.target.value)}}
                autoFocus />
                :
                (
                <h1 className="singlePostTitle">
                    {title}
                    {post.username===user?.username && (
                         <div className="singlePostEdit">
                         <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={(e)=>setUpdateMode(true)}></i>
                         <i className="singlePostIcon fa-solid fa-trash" onClick={handledelete}></i>
     
                         </div>
                    )}
                   
                </h1>
                )}
                <div className="singlePostInfo">
                    <span className='singlePoseAuthor'>Author:<Link to={`/?user=${post.username}`}  className='link'><b>{post.username}</b></Link></span>
                    <span className='singlePoseDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ?
                <textarea className='singlePostDescInput' value={desc} onChange={(e)=>{setDesc(e.target.value)}} /> :
                (
                    <p className='singlePostDesc'>
                    {desc}
                    </p>
                )}

                {updateMode &&  <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
               
               
            </div>
        </div>
    )
}

export default SinglePost
