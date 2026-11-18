
import { UtensilsCrossed, Check } from 'lucide-react';

const mealOptions = [
  {
    id: 'vegetarian',
    name: 'Vegetarian Meal',
    description: 'Fresh vegetarian meal',
    price: 0,
  },
  {
    id: 'vegan',
    name: 'Vegan Meal',
    description: 'Plant-based meal',
    price: 0,
  },
  {
    id: 'standard',
    name: 'Standard Meal',
    description: 'Regular onboard meal',
    price: 0,
  },
  {
    id: 'premium',
    name: 'Premium Meal',
    description: 'Premium meal selection',
    price: 200,
  },
  {
    id: 'special',
    name: 'Special Meal',
    description: 'Special meal selection',
    price: 300,
  },
];

function MealSelection({
  passengers,
  selectedPassengerId,
  onSelectPassenger,
  onMealSelect,
}) {
  const selectedPassenger = passengers.find(
    (passenger) => passenger.id === selectedPassengerId
  );

  if (!selectedPassenger) return null;

  return (
    <section className="meal-section">
      <div className="meal-heading">
        <div>
          <span className="section-label">ONBOARD DINING</span>
          <h2>Choose Your Meal</h2>
          <p>
            Select a meal for Passenger {selectedPassenger.id}.
          </p>
        </div>

        <div className="meal-heading-icon">
          <UtensilsCrossed size={23} />
        </div>
      </div>

      <div className="meal-passenger-tabs">
        {passengers.map((passenger) => (
          <button
            key={passenger.id}
            type="button"
            className={
              passenger.id === selectedPassengerId
                ? 'meal-passenger active'
                : 'meal-passenger'
            }
            onClick={() => onSelectPassenger(passenger.id)}
          >
            Passenger {passenger.id}
            {passenger.meal && <Check size={15} />}
          </button>
        ))}
      </div>

      <div className="meal-options">
        {mealOptions.map((meal) => {
          const isSelected =
            selectedPassenger.meal?.id === meal.id;

          return (
            <button
              key={meal.id}
              type="button"
              className={`meal-card ${isSelected ? 'selected' : ''}`}
              onClick={() =>
                onMealSelect(selectedPassenger.id, meal)
              }
            >
              <div className="meal-card-info">
                <strong>{meal.name}</strong>
                <span>{meal.description}</span>
              </div>

              <div className="meal-card-price">
                <strong>
                  {meal.price === 0 ? 'FREE' : `₹${meal.price}`}
                </strong>
                {isSelected && <Check size={18} />}
              </div>
            </button>
          );
        })}
      </div>

      {selectedPassenger.meal && (
        <button
          type="button"
          className="remove-meal-btn"
          onClick={() =>
            onMealSelect(selectedPassenger.id, null)
          }
        >
          Remove meal selection
        </button>
      )}
    </section>
  );
}

export default MealSelection;
