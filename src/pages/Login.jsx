import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Usercontext";

function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect,setRedirect] = useState(false);
  const{setUserInfo} = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();

    const responce = await fetch("https://blog-server-86dk7l0pn-rishabh-raj-kumar.vercel.app/login", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
      credentials : 'include',
    });

    if(responce.ok){
      alert('Login success');
      responce.json().then(userinfo =>{
        setUserInfo(userinfo);
        setRedirect(true);
      })
    }else{
      alert('wrong credentials');
    }
  };

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <>
      <div className="w-full mt-10 grid place-items-center">
        <div>
          <h1 className=" text-xl font-medium mb-8">LOGIN</h1>
          <form onSubmit={login} className=" max-w-lg flex flex-col gap-2">
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="p-2 outline-none border-none shadow-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={username}
              placeholder="UserName"
              className="p-2 outline-none border-none shadow-md"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="p-2 outline-none border-none shadow-md"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              className="p-2 outline-none border-none shadow-md cursor-pointer hover:bg-slate-400 hover:shadow-xl delay-150 ease-in-out"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
