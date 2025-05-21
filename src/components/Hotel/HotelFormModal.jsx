import React, { useState, useEffect } from 'react';
import './HotelManagement.css'; // Use the same CSS file for styling

const HotelFormModal = ({ onClose, onSubmit, initialData }) => {
    const [hotelData, setHotelData] = useState({
        name: '',
        email: '',
        ph: '',
        state: '',
        city: '',
        rating: '',
        lisenceNo: '',
        checkinTime: '14:00', // Default check-in time
        checkoutTime: '11:00', // Default check-out time
        facilities: '',
        status: 'Active', // Default status for new hotel
    });

    // Populate form if editing existing hotel
    useEffect(() => {
        if (initialData) {
            setHotelData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotelData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation for required fields
        if (!hotelData.name || !hotelData.email || !hotelData.ph || !hotelData.state || !hotelData.city || !hotelData.lisenceNo) {
            alert('Please fill in all required fields: Name, Email, Phone, State, City, License No.');
            return;
        }
        // Basic phone number validation (can be more robust with regex)
        // Ensure it's a number and has a reasonable length (e.g., 10 digits for India)
        if (isNaN(hotelData.ph) || hotelData.ph.length !== 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Pass all collected hotel data to the parent component
        onSubmit(hotelData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content form-card">
                <h3 className="modal-title">{initialData ? 'Edit Hotel Details' : 'Add New Hotel'}</h3>
                <form onSubmit={handleSubmit} className="hotel-form-grid"> {/* Use a grid for better layout */}
                    <div className="form-group full-width">
                        <label htmlFor="hotelName">Hotel Name:</label>
                        <input
                            type="text"
                            id="hotelName"
                            name="name"
                            value={hotelData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelEmail">Contact Email:</label>
                        <input
                            type="email"
                            id="hotelEmail"
                            name="email"
                            value={hotelData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelPh">Phone Number:</label>
                        <input
                            type="number" // Use type="number" for phone to restrict input
                            id="hotelPh"
                            name="ph"
                            value={hotelData.ph}
                            onChange={handleChange}
                            placeholder="e.g., 9876543210"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelState">State:</label>
                        <input
                            type="text"
                            id="hotelState"
                            name="state"
                            value={hotelData.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelCity">City:</label>
                        <input
                            type="text"
                            id="hotelCity"
                            name="city"
                            value={hotelData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelRating">Rating (e.g., 3-star):</label>
                        <input
                            type="text"
                            id="hotelRating"
                            name="rating"
                            value={hotelData.rating}
                            onChange={handleChange}
                            placeholder="e.g., 4-star"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelLisenceNo">License Number:</label>
                        <input
                            type="text"
                            id="hotelLisenceNo"
                            name="lisenceNo"
                            value={hotelData.lisenceNo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hotelCheckinTime">Check-in Time:</label>
                        <input
                            type="time"
                            id="hotelCheckinTime"
                            name="checkinTime"
                            value={hotelData.checkinTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelCheckoutTime">Check-out Time:</label>
                        <input
                            type="time"
                            id="hotelCheckoutTime"
                            name="checkoutTime"
                            value={hotelData.checkoutTime}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="hotelFacilities">Facilities (comma-separated):</label>
                        <textarea
                            id="hotelFacilities"
                            name="facilities"
                            value={hotelData.facilities}
                            onChange={handleChange}
                            rows="2" // Reduced rows for a smaller look
                            placeholder="e.g., Swimming Pool, Free Wi-Fi, Parking, Restaurant"
                        ></textarea>
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="hotelStatus">Status:</label>
                        <select
                            id="hotelStatus"
                            name="status"
                            value={hotelData.status}
                            onChange={handleChange}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Under Renovation">Under Renovation</option>
                        </select>
                    </div>

                    <div className="form-actions full-width">
                        <button type="submit" className="action-button primary-button">
                            {initialData ? 'Save Changes' : 'Next: Setup Admin'}
                        </button>
                        <button type="button" className="action-button secondary-button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HotelFormModal;