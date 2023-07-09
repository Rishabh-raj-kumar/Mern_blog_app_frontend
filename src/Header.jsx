import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './Usercontext'
import { Navigate } from 'react-router-dom';

function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);

  useEffect(() =>{
    try{
     fetch('https://blog-server-7hw0.onrender.com/profile',{
      credentials : 'include',
     }).then((responce) =>{
      responce.json().then(userinfo =>{
        setUserInfo(userinfo);
      })
     })
    }
    catch(err){
      console.log(err)
    }
  },[])

  function logOut(){
    fetch('https://blog-server-7hw0.onrender.com/logout',{
      credentials : 'include',
      method : 'POST',
    })
    setUserInfo(null);
  }

  const username = userInfo?.username;
  if(userInfo === null){
    return <Navigate to={'/login'}/>
  }

  return (
    <header className=" flex justify-between">
        <a href="/" className=" text-2xl font-medium uppercase text-green-700">MyBlog</a>
        <nav className=" flex gap-3">
          {
            username && (
              <>
               <a href="/create" className="uppercase font-medium text-lg">CREATE NEW POST</a>
               <a className=" uppercase font-medium text-lg cursor-pointer" onClick={logOut}>LOG OUT</a>
              </>
            )}
            {!username &&
          (<>
          <a href="/login" className="uppercase font-medium text-lg">LOGIN</a>
          <a href="/register" className=" uppercase font-medium text-lg">Register</a>
          </>
          )
          }
        </nav>
      </header>
  )
}

export default Header