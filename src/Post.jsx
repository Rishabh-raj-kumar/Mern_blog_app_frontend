import React from 'react'
import {format} from 'date-fns'
import {Link} from 'react-router-dom';

function Post({_id,title,summary,content,cover,createdAt,author}) {
  return (
    <Link to={`https://mern-blog-app-server-mauve.vercel.app/post/${_id}`}>
    <div className=' grid items-center w-full'>
    <div className="mt-3 mx-auto w-2/3 md:w-full border-2 grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-4 hover:shadow-xl p-2 rounded delay-150 ease-in-out">
      <div className="m-0 md:m-3">
      <img src={'https://mern-blog-app-server-mauve.vercel.app/'+cover} alt="Rice packets"
      className="w-full md:p-5 max-w-full "/>
      </div>
      <div className=" flex items-center md:items-start flex-col gap-3">
      <span className=" flex gap-2 text-sm">
        {/* author decription */}
        <a className=" font-semibold capitalize bg-gray-200 px-4 rounded">{author.username}</a>
        <a>|</a>
        <a className=' bg-green-200 px-3 rounded'>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</a>
      </span>
      <h2 className=" text-xl font-semibold">{title}</h2>
      <p>{summary}</p>
      </div>
    </div>
  </div>
  </Link>
  )
}

export default Post