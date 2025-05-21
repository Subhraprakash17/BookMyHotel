import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2/Navbar2';
import Sidebar from '../components/Sidebar/HotelDashSlidebar';
import DashboardOverview from '../components/Hotel_components/Dashboard/DashboardManagement';
import Rooms from '../components/Hotel_components/Rooms/RoomManagement';
import GuestManagement from '../components/Hotel_components/Guest_management/GuestManagement';
import Bookings from '../components/Hotel_components/Bookings/BookingsManagement';
import Payments from '../components/Hotel_components/Payments/PaymentsManagement';
import FoodSystem from '../components/Hotel_components/FoodService/FAndSManagement';
import Communication from '../components/Hotel_components/Communications/CommunicationManagement';
import Reports from '../components/Hotel_components/Reports/ReportsManagement';
import Settings from '../components/Hotel_components/Settings/SettingsManagement';
import './HotelDashboard.css';

function HotelDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'rooms':
        return <Rooms />;
      case 'guests':
        return <GuestManagement />;
      case 'bookings':
        return <Bookings />;
      case 'payments':
        return <Payments />;
      case 'food':
        return <FoodSystem />;
      case 'communication':
        return <Communication />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="hotel-dashboard">
      <Navbar2 toggleSidebar={toggleSidebar} />
      <Sidebar setCurrentSection={setCurrentSection} isSidebarOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderSection()}
      </div>
    </div>
  );
}

export default HotelDashboard;