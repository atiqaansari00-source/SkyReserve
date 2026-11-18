
import { Armchair } from 'lucide-react';

function SeatLegend() {
  const statusItems = [
    { label: 'Available', description: 'Can be selected', className: 'legend-available' },
    { label: 'Selected', description: 'Your current selection', className: 'legend-selected' },
    { label: 'Assigned', description: 'Belongs to another passenger', className: 'legend-assigned' },
    { label: 'Occupied', description: 'Unavailable seat', className: 'legend-occupied' },
  ];

  const typeItems = [
    { label: 'Standard', description: '₹0 · Free', className: 'legend-free' },
    { label: 'Premium', description: '₹250', className: 'legend-premium' },
    { label: 'Extra Legroom', description: '₹350', className: 'legend-extra' },
  ];

  function renderItems(items) {
    return items.map((item) => (
      <div className="legend-item" key={item.label}>
        <div className={`legend-icon ${item.className}`}>
          <Armchair size={22} />
        </div>

        <div className="legend-details">
          <strong>{item.label}</strong>
          <span>{item.description}</span>
        </div>
      </div>
    ));
  }

  return (
    <section className="seat-legend">
      <h3>How to Read the Seat Map</h3>

      <div className="legend-group">
        <h4>SEAT STATUS</h4>
        <div className="legend-items status-items">
          {renderItems(statusItems)}
        </div>
      </div>

      <div className="legend-divider"></div>

      <div className="legend-group">
        <h4>SEAT TYPE & PRICE</h4>
        <div className="legend-items type-items">
          {renderItems(typeItems)}
        </div>
      </div>
    </section>
  );
}

export default SeatLegend;
