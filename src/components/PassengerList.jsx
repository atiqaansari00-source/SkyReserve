
import { UserRound, Check, Armchair } from 'lucide-react';

function PassengerList({
  passengers,
  selectedPassengerId,
  onSelectPassenger,
  passengerCount,
  onPassengerCountChange,
}) {
  return (
    <section className="passenger-section">
      <div className="passenger-heading">
        <div>
          <span className="section-label">TRAVELERS</span>
          <h2>Passengers</h2>
        </div>

        <select
          value={passengerCount}
          onChange={(event) =>
            onPassengerCountChange(Number(event.target.value))
          }
          aria-label="Number of passengers"
        >
          {[1, 2, 3, 4].map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? 'Passenger' : 'Passengers'}
            </option>
          ))}
        </select>
      </div>

      <div className="passenger-list">
        {passengers.map((passenger, index) => {
          const isSelected = passenger.id === selectedPassengerId;

          return (
            <button
              key={passenger.id}
              type="button"
              className={`passenger-card ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectPassenger(passenger.id)}
              aria-pressed={isSelected}
            >
              <div className="passenger-avatar">
                <UserRound size={20} />
              </div>

              <div className="passenger-details">
                <strong>Passenger {index + 1}</strong>

                <span>
                  <Armchair size={14} />
                  {passenger.seat || 'No seat assigned'}
                </span>
              </div>

              <div className="passenger-status">
                {passenger.seat ? (
                  <Check size={18} />
                ) : (
                  <span className="seat-pending">Pending</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default PassengerList;
