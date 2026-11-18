
import { Plane, Clock, CalendarDays } from 'lucide-react';

function FlightInfo() {
  return (
    <section className="flight-info">
      <div className="flight-heading">
        <div>
          <span className="section-label">YOUR JOURNEY</span>
          <h2>Flight Details</h2>
        </div>

        <span className="flight-status">Confirmed</span>
      </div>

      <div className="flight-route">
        <div className="airport">
          <h2>MUM</h2>
          <p>Mumbai, India</p>
          <strong>08:30 AM</strong>
        </div>

        <div className="route-middle">
          <span>AI 202</span>
          <div className="route-line">
            <span></span>
            <Plane size={22} />
            <span></span>
          </div>
          <small>2h 15m · Non-stop</small>
        </div>

        <div className="airport airport-right">
          <h2>DEL</h2>
          <p>New Delhi, India</p>
          <strong>10:45 AM</strong>
        </div>
      </div>

      <div className="flight-footer">
        <span>
          <CalendarDays size={16} />
          25 November 2026
        </span>

        <span>
          <Clock size={16} />
          Boarding at 08:00 AM
        </span>
      </div>
    </section>
  );
}

export default FlightInfo;
