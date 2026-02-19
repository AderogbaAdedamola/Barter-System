import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/signup'
import Login from './pages/login';
import Home from './pages/HomePage';
import ProfilePage from './pages/Profile'
import MainLayout from './components/Layouts/MainLayout';
import BrowseServices from './pages/BrowseServices';
import Notifications from './pages/Notifications';
import PostService from "./pages/PostService";





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<BrowseServices />} />
          <Route path="/post-service" element={<PostService />} /> 
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
