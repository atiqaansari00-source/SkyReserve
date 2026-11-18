
import { Plane, Bell, UserRound } from 'lucide-react';

function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-icon">
          <Plane size={24} />
        </div>

        <div className="brand-info">
          <h2>SkyReserve</h2>
          <span>FLIGHT BOOKING</span>
        </div>
      </div>

      <div className="header-actions">
        <button className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <div className="profile">
          <div className="profile-avatar">
            <UserRound size={20} />
          </div>

          <div className="profile-info">
            <strong>Guest User</strong>
            <span>Traveler</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
