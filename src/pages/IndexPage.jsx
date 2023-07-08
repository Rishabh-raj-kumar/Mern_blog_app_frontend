import React, { useEffect, useState } from 'react'
import Post from '../Post'

function IndexPage() {
  const [posts,setPosts] = useState([]);

  useEffect(() =>{
     fetch('http://localhost:8080/post').then(responce =>{
      //responce.json is just a promise we had to solve it.
      responce.json().then((post) =>{
            // console.log(post)
            setPosts(post);
      })
     })
  },[])


  return (
    <main>
        {
          posts.length > 0 && posts.map(post =>(
            <Post {...post} />
          ))
        }
    </main>
  )
}

export default IndexPage