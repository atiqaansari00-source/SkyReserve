
import { Armchair, Trash2, Receipt, Utensils } from 'lucide-react';

function BookingSummary({ passengers, seats, onRemoveSeat }) {
  const seatTotal = passengers.reduce((sum, passenger) => {
    const assignedSeat = seats.find(
      (seat) => seat.id === passenger.seat
    );

    return sum + (assignedSeat ? assignedSeat.price : 0);
  }, 0);

  const mealTotal = passengers.reduce((sum, passenger) => {
    return sum + (passenger.meal?.price ?? 0);
  }, 0);

  const grandTotal = seatTotal + mealTotal;

  return (
    <section className="booking-summary">
      <div className="summary-heading">
        <div>
          <span className="section-label">YOUR BOOKING</span>
          <h2>Booking Summary</h2>
        </div>

        <Receipt size={22} />
      </div>

      <div className="summary-passengers">
        {passengers.map((passenger, index) => {
          const assignedSeat = seats.find(
            (seat) => seat.id === passenger.seat
          );

          return (
            <div className="summary-passenger" key={passenger.id}>
              <div className="summary-passenger-info">
                <strong>Passenger {index + 1}</strong>

                <span>
                  <Armchair size={14} />
                  {assignedSeat
                    ? `Seat ${assignedSeat.id}`
                    : 'No seat selected'}
                </span>

                <span>
                  <Utensils size={14} />
                  {passenger.meal
                    ? passenger.meal.name
                    : 'No meal selected'}
                </span>
              </div>

              <div className="summary-price">
                <div className="summary-charge-details">
                  <strong>
                    ₹{assignedSeat ? assignedSeat.price : 0}
                  </strong>

                  {passenger.meal && (
                    <strong>
                      ₹{passenger.meal.price}
                    </strong>
                  )}
                </div>

                {assignedSeat && (
                  <button
                    type="button"
                    onClick={() => onRemoveSeat(passenger.id)}
                    aria-label={`Remove seat ${assignedSeat.id}`}
                    title="Remove seat"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="summary-divider"></div>

      <div className="summary-breakdown">
        <div>
          <span>Seat Charges</span>
          <strong>₹{seatTotal}</strong>
        </div>

        <div>
          <span>Meal Charges</span>
          <strong>₹{mealTotal}</strong>
        </div>
      </div>

      <div className="summary-total">
        <span>Grand Total</span>
        <strong>₹{grandTotal}</strong>
      </div>

      <p className="summary-note">
        Final charges include selected seats and meals.
      </p>
    </section>
  );
}

export default BookingSummary;
