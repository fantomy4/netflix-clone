import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { IoSearchOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

export const navigation = [
    {
        label : "TV Shows",
        href : 'tv',
        icon : <PiTelevisionFill></PiTelevisionFill>
    },
    {
        label : "Movies",
        href : 'movie',
        icon : <BiSolidMoviePlay></BiSolidMoviePlay>
    }
]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/", 
        icon : <MdHomeFilled></MdHomeFilled>
    },

    ...navigation
]

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        navigate(`/search?q=${searchInput}`)
    },[searchInput])

    const handleSubmit = (e)=> {
        e.preventDefault()
    } 

  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'> 
        <div className='container px-12 flex items-center h-full'>
            <Link to={"/"}>
                <img
                src={logo}
                alt='logo'
                width={120}
                >
                </img>
            </Link>

            <nav className='hidden lg:flex items-center gap-1 ml-4'>
                {
                    navigation.map((nav,index)=>{
                        return(
                            <div>
                                <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-3 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>

            <div className='ml-auto flex items-center gap-5'>
                <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Пошук...'
                        className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                        onChange={(e)=>setSearchInput(e.target.value)}
                        value={searchInput}
                    >
                    </input>
                    <button className='text-2xl text-white'>
                        <IoSearchOutline></IoSearchOutline>
                    </button>
                </form>
                <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                    <img
                    src={userIcon}
                    alt='user'
                    width='w-full h-full'
                    >
                    </img>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
