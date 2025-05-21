import React, { useState } from 'react';
import ViewAllBookings from './ViewAllBookings';
import NewBooking from './NewBooking';
import CancelModifyBooking from './CancelModifyBooking';
import './BookingsManagement.css'; 

const BookingsManagement = () => {
    const [activeTab, setActiveTab] = useState('viewAllBookings');

    const renderContent = () => {
        switch (activeTab) {
            case 'viewAllBookings':
                return <ViewAllBookings />;
            case 'newBooking':
                return <NewBooking />;
            case 'cancelModifyBooking':
                return <CancelModifyBooking />;
            default:
                return <ViewAllBookings />;
        }
    };

    return (
        <div className="bookings-management-container">
            <h2 className="bookings-management-title">Bookings Management</h2>
            <div className="bookings-management-tabs">
                <button
                    className={`tab-button ${activeTab === 'viewAllBookings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('viewAllBookings')}
                >
                    View All Bookings
                </button>
                <button
                    className={`tab-button ${activeTab === 'newBooking' ? 'active' : ''}`}
                    onClick={() => setActiveTab('newBooking')}
                >
                    New Booking
                </button>
                <button
                    className={`tab-button ${activeTab === 'cancelModifyBooking' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cancelModifyBooking')}
                >
                    Cancel/Modify Booking
                </button>
            </div>
            <div className="bookings-management-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default BookingsManagement;