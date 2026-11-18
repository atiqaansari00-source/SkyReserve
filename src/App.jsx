
import { useState } from 'react';

import Header from './components/Header';
import FlightInfo from './components/FlightInfo';
import PassengerList from './components/PassengerList';
import SeatMap from './components/SeatMap';
import SeatLegend from './components/SeatLegend';
import BookingSummary from './components/BookingSummary';
import MealSelection from './components/MealSelection';

import { initialPassengers } from './data/passengers';
import { seatLayouts } from './data/seats';

import './App.css';

function App() {
  const [passengers, setPassengers] = useState(initialPassengers);
  const [passengerCount, setPassengerCount] = useState(2);
  const [selectedPassengerId, setSelectedPassengerId] = useState(1);
  const [layoutType, setLayoutType] = useState('3-2');

  const visiblePassengers = passengers.slice(0, passengerCount);

  const selectedPassenger = visiblePassengers.find(
    (passenger) => passenger.id === selectedPassengerId
  );

  const currentSeats = seatLayouts[layoutType].seats;

  const assignedSeatIds = visiblePassengers
    .filter((passenger) => passenger.id !== selectedPassengerId)
    .map((passenger) => passenger.seat)
    .filter(Boolean);

  function handlePassengerCountChange(count) {
    setPassengerCount(count);
    setSelectedPassengerId(1);
  }

  function handleSelectPassenger(passengerId) {
    setSelectedPassengerId(passengerId);
  }

  function handleLayoutChange(newLayoutType) {
    const newSeats = seatLayouts[newLayoutType].seats;

    const validSeatIds = new Set(
      newSeats
        .filter((seat) => seat.status === 'available')
        .map((seat) => seat.id)
    );

    setPassengers((previousPassengers) =>
      previousPassengers.map((passenger) =>
        passenger.seat && !validSeatIds.has(passenger.seat)
          ? { ...passenger, seat: null }
          : passenger
      )
    );

    setLayoutType(newLayoutType);
  }

  function handleSeatSelect(seat) {
    if (!selectedPassenger) return;

    if (
      seat.status === 'occupied' ||
      assignedSeatIds.includes(seat.id)
    ) {
      return;
    }

    setPassengers((previousPassengers) =>
      previousPassengers.map((passenger) =>
        passenger.id === selectedPassengerId
          ? { ...passenger, seat: seat.id }
          : passenger
      )
    );
  }

  function handleRemoveSeat(passengerId) {
    setPassengers((previousPassengers) =>
      previousPassengers.map((passenger) =>
        passenger.id === passengerId
          ? { ...passenger, seat: null }
          : passenger
      )
    );
  }

  function handleMealSelect(passengerId, meal) {
    setPassengers((previousPassengers) =>
      previousPassengers.map((passenger) =>
        passenger.id === passengerId
          ? { ...passenger, meal }
          : passenger
      )
    );
  }

  return (
    <div className="app-container">
      <Header />

      <main className="dashboard">
        <FlightInfo />

        <div className="booking-layout">
          <div className="booking-main">
            <PassengerList
              passengers={visiblePassengers}
              selectedPassengerId={selectedPassengerId}
              onSelectPassenger={handleSelectPassenger}
              passengerCount={passengerCount}
              onPassengerCountChange={handlePassengerCountChange}
            />

            <SeatMap
              layoutType={layoutType}
              onLayoutChange={handleLayoutChange}
              seats={currentSeats}
              selectedSeatId={selectedPassenger?.seat ?? null}
              onSeatSelect={handleSeatSelect}
              assignedSeatIds={assignedSeatIds}
            />

            <SeatLegend />

            <MealSelection
              passengers={visiblePassengers}
              selectedPassengerId={selectedPassengerId}
              onSelectPassenger={handleSelectPassenger}
              onMealSelect={handleMealSelect}
            />
          </div>

          <aside className="booking-sidebar">
            <BookingSummary
              passengers={visiblePassengers}
              seats={currentSeats}
              onRemoveSeat={handleRemoveSeat}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
