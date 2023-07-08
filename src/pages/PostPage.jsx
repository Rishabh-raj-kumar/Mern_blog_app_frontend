import React, { useState } from 'react'
import Header from '../Header';
import { useParams } from 'react-router-dom';
import {format} from 'date-fns'

function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  //we need to fetch parameter of id.
  const {id} = useParams();
  fetch(`https://blog-server-86dk7l0pn-rishabh-raj-kumar.vercel.app/post/${id}`)
  .then((resp) =>{
    resp.json().then((postinfo) =>{
      setPostInfo(postinfo);
    })
  },[])

  if (!postInfo) return '';
  return (
    <main className=" w-full max-w-[700px] p-4 mx-auto">
      <Header />
      <div className='mt-4 min-w-full'>
      <div className=' mb-3 w-full grid  gap-2 justify-center'>
      <h1 className=' mt-5 text-3xl font-semibold capitalize'>{postInfo.title}</h1>
      <span className=' flex flex-wrap gap-3'>
      <p className=' w-fit bg-pink-200 px-3 rounded capitalize'>Author : {postInfo.author.username}</p>
      <p className=' w-fit px-3 rounded'>{format(new Date(postInfo.createdAt),'MMM d, yyyy HH:mm')}</p>
      </span>
      </div>
        <div className=' mx-auto w-2/3'>
        <img src={'http://localhost:8080/'+postInfo.cover}/>
        </div>
        <p className=' text-center'>{postInfo.summary}</p>
        <div dangerouslySetInnerHTML={{__html : postInfo.content}} />
      </div>
    </main>
  )
}

export default PostPage;