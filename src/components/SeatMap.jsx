
import { Armchair, Plane } from 'lucide-react';

function SeatMap({
  layoutType,
  onLayoutChange,
  seats,
  selectedSeatId,
  onSeatSelect,
  assignedSeatIds,
}) {
  const seatGroups = layoutType === '3-2'
    ? [['A', 'B', 'C'], ['D', 'E']]
    : [['A', 'B'], ['D', 'E', 'F'], ['G', 'H']];

  const rows = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <section className="seat-map-section">
      <div className="seat-map-heading">
        <div>
          <span className="section-label">AIRCRAFT LAYOUT</span>
          <h2>Select Your Seat</h2>
        </div>

        <select
          value={layoutType}
          onChange={(event) => onLayoutChange(event.target.value)}
          aria-label="Aircraft configuration"
        >
          <option value="3-2">3–2 Configuration</option>
          <option value="2-3-2">2–3–2 Configuration</option>
        </select>
      </div>

      <div className="aircraft-map">
        <div className="aircraft-nose">
          <Plane size={25} />
          <span>FRONT OF AIRCRAFT</span>
        </div>

        <div className="seat-labels">
          <span>ROW</span>

          {seatGroups.map((group, groupIndex) => (
            <div className="seat-group" key={groupIndex}>
              {group.map((letter) => (
                <span key={letter}>{letter}</span>
              ))}
            </div>
          ))}
        </div>

        <div className="seat-rows">
          {rows.map((row) => (
            <div className="seat-row" key={row}>
              <span className="row-number">{row}</span>

              {seatGroups.map((group, groupIndex) => (
                <div className="seat-group" key={groupIndex}>
                  {group.map((letter) => {
                    const seatId = `${row}${letter}`;

                    const seat = seats.find(
                      (item) => item.id === seatId
                    );

                    if (!seat) return null;

                    const isOccupied = seat.status === 'occupied';
                    const isAssigned = assignedSeatIds.includes(seatId);
                    const isSelected = selectedSeatId === seatId;

                    return (
                      <button
                        key={seatId}
                        type="button"
                        className={`seat ${seat.category} ${
                          isOccupied ? 'occupied' : ''
                        } ${isAssigned ? 'assigned' : ''} ${
                          isSelected ? 'selected' : ''
                        }`}
                        disabled={isOccupied || isAssigned}
                        onClick={() => onSeatSelect(seat)}
                        title={`${seatId} - ₹${seat.price}`}
                        aria-label={`Seat ${seatId}, ${
                          isOccupied
                            ? 'Occupied'
                            : isAssigned
                              ? 'Assigned'
                              : `₹${seat.price}`
                        }`}
                      >
                        <Armchair size={17} />
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeatMap;