import React, { useState } from 'react';
import './HotelManagement.css';
import HotelFormModal from './HotelFormModal';
import AdminCredentialsFormModal from './AdminCredentialsFormModal';

function HotelManagement() {
    const [hotels, setHotels] = useState([
        // Initial mock data with extended fields
        {
            id: 1,
            name: 'Grand Imperial Hotel',
            email: 'info@grandimperial.com',
            ph: '9876543210',
            state: 'Himachal Pradesh',
            city: 'Shimla',
            rating: '4-star',
            lisenceNo: 'HP-SH-12345',
            checkinTime: '14:00',
            checkoutTime: '11:00',
            facilities: 'Swimming Pool, Free Wi-Fi, Parking, Restaurant, Spa',
            timeStamp: '2024-01-15T10:30:00Z',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Mountain View Resort',
            email: 'contact@mountainview.com',
            ph: '9988776655',
            state: 'Uttarakhand',
            city: 'Manali',
            rating: '3-star',
            lisenceNo: 'UK-MA-67890',
            checkinTime: '15:00',
            checkoutTime: '10:00',
            facilities: 'Hiking Trails, Bonfire, Cafe, Pet-Friendly',
            timeStamp: '2023-11-20T12:00:00Z',
            status: 'Active'
        },
    ]);
    const [showHotelFormModal, setShowHotelFormModal] = useState(false);
    const [showAdminFormModal, setShowAdminFormModal] = useState(false);
    const [newHotelTempData, setNewHotelTempData] = useState(null); // Stores hotel data temporarily
    const [editingHotel, setEditingHotel] = useState(null); // For future edit functionality

    const handleAddHotelClick = () => {
        setEditingHotel(null); // Ensure we're adding, not editing
        setShowHotelFormModal(true);
    };

    const handleHotelFormSubmit = (hotelData) => {
        // In a real app, you'd send this to a backend API to get a real ID and a server-side timestamp
        const newId = hotels.length > 0 ? Math.max(...hotels.map(h => h.id)) + 1 : 1;
        const hotelWithId = { ...hotelData, id: newId, timeStamp: new Date().toISOString() }; // Add current timestamp
        setNewHotelTempData(hotelWithId); // Store the hotel data to pass to admin form
        setShowHotelFormModal(false); // Close hotel form
        setShowAdminFormModal(true); // Open admin form
    };

    const handleAdminFormSubmit = (adminCredentials) => {
        // In a real app, you'd send adminCredentials to a backend API
        // associated with newHotelTempData.id, and only then add to local state.
        console.log('New Hotel Data (including admin setup):', { ...newHotelTempData, admin: adminCredentials });

        setHotels(prevHotels => [...prevHotels, newHotelTempData]); // Add hotel to list
        alert(`Hotel "${newHotelTempData.name}" added successfully with admin user "${adminCredentials.email}"!`);

        // Reset all states
        setNewHotelTempData(null);
        setShowAdminFormModal(false);
    };

    const handleCloseModals = () => {
        setShowHotelFormModal(false);
        setShowAdminFormModal(false);
        setNewHotelTempData(null); // Clear temporary data if user cancels mid-process
    };

    const handleEdit = (hotel) => {
        // For future implementation: pre-fill the form with hotel data for editing
        setEditingHotel(hotel);
        setShowHotelFormModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete Hotel with ID: ${id}?`)) {
            setHotels(hotels.filter(hotel => hotel.id !== id));
            alert(`Hotel ID ${id} deleted.`);
        }
    };

    // Helper to get status badge class
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'Active': return 'status-paid-badge'; // Using a green badge for active
            case 'Inactive': return 'status-failed-badge'; // Using a red badge for inactive
            case 'Under Renovation': return 'status-pending-badge'; // Using a yellow badge
            default: return 'status-default-badge';
        }
    };

    return (
        <div className="hotel-management__container">
            <h1 className="hotel-management__title">Hotel Management</h1>
            <button className="hotel-management__add-btn action-button primary-button" onClick={handleAddHotelClick}>
                Add New Hotel
            </button>
            <div className="hotel-management__table-wrapper">
                <table className="hotel-management__table modern-table">
                    <thead>
                        <tr>
                            <th className="hotel-management__th">ID</th>
                            <th className="hotel-management__th">Name</th>
                            <th className="hotel-management__th">Location</th>
                            <th className="hotel-management__th">Contact Email</th>
                            <th className="hotel-management__th">Phone</th>
                            <th className="hotel-management__th">License No.</th>
                            <th className="hotel-management__th">Status</th>
                            <th className="hotel-management__th">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.length > 0 ? (
                            hotels.map(hotel => (
                                <tr key={hotel.id} className="hotel-management__row">
                                    <td className="hotel-management__td" data-label="ID:">{hotel.id}</td>
                                    <td className="hotel-management__td" data-label="Name:">{hotel.name}</td>
                                    <td className="hotel-management__td" data-label="Location:">{hotel.location}, {hotel.city}, {hotel.state}</td>
                                    <td className="hotel-management__td" data-label="Contact Email:">{hotel.email}</td>
                                    <td className="hotel-management__td" data-label="Phone:">{hotel.ph}</td>
                                    <td className="hotel-management__td" data-label="License No.:">{hotel.lisenceNo}</td>
                                    <td className="hotel-management__td" data-label="Status:">
                                        <span className={`status-badge ${getStatusBadgeClass(hotel.status)}`}>
                                            {hotel.status}
                                        </span>
                                    </td>
                                    <td className="hotel-management__td-actions" data-label="Actions:">
                                        <button
                                            className="hotel-management__edit-btn action-button small-button secondary-button"
                                            onClick={() => handleEdit(hotel)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="hotel-management__delete-btn action-button small-button danger-button"
                                            onClick={() => handleDelete(hotel.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="no-data-message">No hotels added yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Hotel Form Modal */}
            {showHotelFormModal && (
                <HotelFormModal
                    onClose={handleCloseModals}
                    onSubmit={handleHotelFormSubmit}
                    initialData={editingHotel} // Pass data if editing
                />
            )}

            {/* Admin Credentials Form Modal */}
            {showAdminFormModal && newHotelTempData && (
                <AdminCredentialsFormModal
                    onClose={handleCloseModals}
                    onSubmit={handleAdminFormSubmit}
                    hotelName={newHotelTempData.name}
                />
            )}
        </div>
    );
}

export default HotelManagement;