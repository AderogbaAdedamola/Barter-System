import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MobileNavbar from './MobileNavbar';
import { currentUser } from '../../data/mockData';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header user={currentUser} />

      <main className="grow pb-20 md:pb-8">
        <Outlet />
      </main>

      {/* Mobile Navigation: Only visible on small screens */}
      <MobileNavbar />
    </div>
  );
}