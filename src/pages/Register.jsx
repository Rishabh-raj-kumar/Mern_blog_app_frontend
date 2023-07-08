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
      const responce = await fetch('https://mern-blog-app-server-mauve.vercel.app/register',{
      method : 'POST',
      mode: "cors",
      body : JSON.stringify({ username, password, email}),
    })

    if(responce.status === 200){
      alert('Registered successfully');
      setLoader(true);
    }else{
      alert('Not Registered',responce);
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