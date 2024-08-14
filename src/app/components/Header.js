import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import redditLogo from './redditLogo.png'
import { FaSearch } from "react-icons/fa";

export default function Header() {

    const [search, setSearch] = useState("")

    console.log(search)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch('')
    }
//filter Logic: 
  return (
    <>
    <nav>
        <div className='nav-left'>
            <Link to='/'>
                <img alt="Reddit Simpl logo" className="logo" src={redditLogo} />
            </Link>
            <Link to='/' className='logotext'>
                <h1>Reddit<span>Simpl</span></h1>
            </Link>

        </div>
        <form className='nav-center' onSubmit={handleSubmit}>
            <input type='text' className='navInput' onChange={(e) => setSearch(e.target.value)} placeholder='Search' value={search}/>
            <button className='search' ><FaSearch className='searchGlass'/></button>
        </form>
        <div className='nav-right'></div>
    </nav>
    <div className='sideBar'>
        <h2 className='subreddits'>Subreddits</h2>
            
            <NavLink to="/Politics" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/politics</h3>
            </NavLink>
            <NavLink to="/livestreamfail" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/livestreamFail</h3>
            </NavLink>
            <NavLink to="/funny" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/funny</h3>
            </NavLink>
            <NavLink to="/television" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/television</h3>
            </NavLink>
            <NavLink to="/pics" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/pics</h3>
            </NavLink>
            <NavLink to="/nostupidquestions" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/nostupidquestions</h3>
            </NavLink>
            <NavLink to="/gym" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/gym</h3>
            </NavLink>
            <NavLink to="/dogs" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/dogs</h3>
            </NavLink>
            <NavLink to="/xqcow" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/xqcow</h3>
            </NavLink>
            <NavLink to="/joerogan" className={({isActive}) => isActive ? "activeSubreddit" : "nonActiveSubReddit"}>
                <h3>r/joerogan</h3>
            </NavLink>
            

    </div>
    </>
  )
}
