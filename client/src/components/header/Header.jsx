import React from 'react'
import "./Header.css"
function header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">React&Node</span>
                <span className="headerTitlesLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000" alt="" />
        </div>
    )
} 

export default header

