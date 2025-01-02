import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from './pages/Layoutpages.tsx';
import Home from './pages/admin/ListBlogs/home/Home.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './components/admin/auth/Login.tsx';
import Register from './components/admin/auth/Register.tsx';
import LayoutAdmin from './layouts/admin/LayOutAdmin.tsx';
import News from './pages/admin/ListBlogs/news/News.tsx';
import GeneralTerms from './pages/admin/ListBlogs/GeneralTerms.tsx';
import PrivacyPolicy from './pages/admin/ListBlogs/PrivacyPolicy.tsx';
import EditSlide from './pages/admin/ListBlogs/home/EditSlide.tsx';
import AddBlogs from './pages/admin/ListBlogs/news/AddBlogs.tsx';
import Category from './pages/admin/ListBlogs/Category/Category.tsx';
import configAxios from './config/configAxios.ts';
import HomePage from './pages/user/HomePage.tsx';
import NewsUser from './pages/user/newsuser/NewsUser.tsx';
import IntroduceUser from './pages/user/introduce/IntroduceUser.tsx';
import NewsUserDetail from './pages/user/newsuser/NewsUserDetails.tsx';
import Listofinterest from './components/user/Listofinterest.tsx';
import Clause from './pages/user/Clause.tsx';


configAxios();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/user' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/newsuser' element={<NewsUser/>}/>
          <Route path='/user/introduceuser' element={<IntroduceUser/>}/>
          <Route path='/user/newuser/newuserdetails' element={<NewsUserDetail/>}/>
          <Route path='/user/listofinterest' element={<Listofinterest/>}/>
          <Route path='/user/clause' element={<Clause/>}/>
          <Route path='/' element={<Login />} />
          <Route path='/layoutPageAdmin' element={<LayoutPage />} />
          <Route path='/admin' element={<LayoutAdmin />}>
            <Route path='news' element={<News />} />
            <Route path='home' element={<Home />} />
            <Route path='privacy' element={<PrivacyPolicy />} />
            <Route path='category' element={<Category />} />
          </Route>
          <Route path='editSlide' element={<EditSlide />} />
          <Route path='addBlogs' element={<AddBlogs />} />
          <Route path='/generalTerm' element={<GeneralTerms />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  </StrictMode>,
)
 