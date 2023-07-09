import './App.css'
import Login from './pages/Login';
import Register from  './pages/Register';

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import { UserContextProvider } from './Usercontext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';

const App = () =>{
  return(
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path={"/"} element={
             <Layout />
        }>
        <Route index element={<IndexPage />}/>
        <Route path={"/login"} exact element={
          <Login />
        }/>
        <Route path={"/register"} exact element={      
         <Register />
        }/>
        </Route>
        <Route path={"/create"} exact element={
          <CreatePost />
        }/>
        <Route path={"/post/:id"} exact element={
          <PostPage />
        }/>
        <Route path={"/edit/:id"} exact element={
          <EditPage />
        }/>
      </Routes>
    </Router>
    </UserContextProvider>
  )
}

export default App;