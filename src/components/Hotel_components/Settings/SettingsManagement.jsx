import React, { useState } from 'react';
import ProfileSettings from './ProfileSettings';
import ChangePassword from './ChangePassword';
import './SettingsManagement.css'; // Import the CSS file

const SettingsManagement = () => {
    const [activeSetting, setActiveSetting] = useState('profile'); // Default active setting

    const renderSettingComponent = () => {
        switch (activeSetting) {
            case 'profile':
                return <ProfileSettings />;
            case 'changePassword':
                return <ChangePassword />;
            default:
                return <ProfileSettings />;
        }
    };

    return (
        <div className="settings-management-container">
            <h2 className="settings-dashboard-title">User Settings</h2>

            <nav className="settings-navigation">
                <button
                    className={`nav-button ${activeSetting === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveSetting('profile')}
                >
                    Profile Settings
                </button>
                <button
                    className={`nav-button ${activeSetting === 'changePassword' ? 'active' : ''}`}
                    onClick={() => setActiveSetting('changePassword')}
                >
                    Change Password
                </button>
            </nav>

            <div className="setting-content-display">
                {renderSettingComponent()}
            </div>
        </div>
    );
};

export default SettingsManagement;