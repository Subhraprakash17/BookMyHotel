import React, { useState } from 'react';
import './HotelManagement.css'; // Use the same CSS file for styling

const AdminCredentialsFormModal = ({ onClose, onSubmit, hotelName }) => {
    const [adminCredentials, setAdminCredentials] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminCredentials(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (adminCredentials.password !== adminCredentials.confirmPassword) {
            alert('Password and Confirm Password do not match!');
            return;
        }
        if (adminCredentials.password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        onSubmit({ email: adminCredentials.email, password: adminCredentials.password });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content form-card">
                <h3 className="modal-title">Setup Admin for {hotelName}</h3>
                <form onSubmit={handleSubmit} className="admin-form">
                    <p className="modal-description">Create an admin account for the new hotel.</p>
                    <div className="form-group">
                        <label htmlFor="adminEmail">Admin Email:</label>
                        <input
                            type="email"
                            id="adminEmail"
                            name="email"
                            value={adminCredentials.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="adminPassword">Password:</label>
                        <input
                            type="password"
                            id="adminPassword"
                            name="password"
                            value={adminCredentials.password}
                            onChange={handleChange}
                            required
                            minLength="8"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmAdminPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmAdminPassword"
                            name="confirmPassword"
                            value={adminCredentials.confirmPassword}
                            onChange={handleChange}
                            required
                            minLength="8"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="action-button primary-button">Create Admin & Add Hotel</button>
                        <button type="button" className="action-button secondary-button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminCredentialsFormModal;