import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import Header from "../../components/header/Header"
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Home.css"
import { useLocation } from 'react-router-dom'
function Home() {
    const [posts,setPosts]=useState([]);
    const {search} =useLocation();
   
    useEffect(()=>{
        const fetchPosts=async()=>{
           const res=await axios.get("/posts"+search)
           console.log(res);
           setPosts(res.data)
        }
        fetchPosts();
    },[search])
    return (
        <>
        <Header/>
        <div className="home">
       <Posts posts={posts}/>
       <Sidebar/>     
        </div>
        </>
    )
}

export default Home
