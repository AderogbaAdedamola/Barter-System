import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/Signup'
import Login from './pages/Login';
import Home from './pages/HomePage';
import ProfilePage from './pages/Profile'
import MainLayout from './components/Layouts/MainLayout';
import BrowseServices from './pages/BrowseServices';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings'
import ServiceDetail from './pages/ServiceDetail';
import ChatPage from './pages/ChatPage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<BrowseServices />} />
          {/* <Route path="/post-service" element={<PostService />} /> */}
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatPage />} /> 

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
