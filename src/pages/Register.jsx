import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
function Register() {

  const [username,setName] = useState('');
  const [password,setPassword] = useState('');
  const [ email,setEmail]  = useState('');
  const [loader,setLoader] = useState(false);
  
  const register = async (e) =>{
    e.preventDefault();

    try{
      const responce = await fetch('https://blog-server-7hw0.onrender.com/register',{
      method : 'POST',
      body : JSON.stringify({ username, password, email}),
      headers : {'Content-Type':'application/json'},
    })

    if(responce.status === 200){
      alert('Registered successfully');
      setLoader(true);
    }else{
      alert('Not Registered');
    }
    }
    catch(err){
      //if user is already present..
      console.log("Error", err);
    }
  }

  if(loader === true){
    return <Navigate to={'/'}/>
  }
  
  return (
    <>
    <div className='w-full mt-10 grid place-items-center'>
      <div>
        <h1 className=' text-xl font-medium mb-8'>REGISTER</h1>
    <form onSubmit={register}
    className=" max-w-lg flex flex-col gap-2">
      <input 
    type='email'
    value={email}
    placeholder='Email'
    className='p-2 outline-none border-none shadow-md'
    onChange={e => setEmail(e.target.value)}/>
    <input 
    type='text'
    value={username}
    placeholder='UserName'
    className='p-2 outline-none border-none shadow-md'
    onChange={e => setName(e.target.value)}/>
    <input 
    type='password'
    placeholder='Password'
    value={password}
    className='p-2 outline-none border-none shadow-md'
    onChange={e => setPassword(e.target.value)}/>
    <input 
    type='submit'
    className='p-2 outline-none border-none shadow-md cursor-pointer hover:bg-slate-400 hover:shadow-xl delay-150 ease-in-out'/>
    </form>
    </div>
    </div>
    </>
  )
}

export default Register