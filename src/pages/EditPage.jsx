import React from 'react'
import Header from '../Header'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import ReactQuill from 'react-quill'

const modules = {
  toolbar : [
   [{ 'header' : [1,2,3, false]}],
   ['bold' , 'italic' , 'underline' ,'strike', 'blockquote'],
   [{ 'list' : 'ordered'},{'list' : 'bullet'}],
   ['link','image'],
   ['clean']
  ]
}

const formats = [
  'header',
  'bold','italic','underline','strike','blockquote',
  'list','bullet','indent',
  'link','image',
]

function EditPage() {
  const [title,setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [file,setFile] = useState('');
  const [redirect,setRedirect] = useState(false);

  async function updatePost(e){
      e.preventDefault();
  }

  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <main className=" w-full max-w-[700px] p-4 mx-auto">
    <Header/>
    <form className='flex flex-col w-full gap-2 mt-8' onSubmit={updatePost}>
      <input type='title' placeholder={'Title'} className='w-full p-2 outline-none border shadow-md'
      value={title}
      onChange={(e) => setTitle(e.target.value)}/>
      <input type='summary' placeholder={'Summary'} className='w-full p-2 outline-none border shadow-md'
      value={summary}
      onChange={(e) => setSummary(e.target.value)}/>
      <input type='file' className='w-full p-2 outline-none border shadow-md'
      onChange={e => setFile(e.target.files)}/>
      <ReactQuill value={content} modules={modules} formats={formats}
      onChange={newValue => setContent(newValue)}/>
      <button className='w-full p-2 bg-slate-950 text-white outline-none border shadow-md'>SUBMIT</button>
    </form>
    </main>
  )
}

export default EditPage