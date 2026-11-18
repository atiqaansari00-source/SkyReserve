
const occupiedSeats = ['2C', '3A', '4E', '5B', '6D'];

const seatPrices = {
  standard: 0,
  premium: 250,
  extraLegroom: 350,
};

const threeTwoSeats = ['A', 'B', 'C', 'D', 'E'];
const twoThreeTwoSeats = ['A', 'B', 'D', 'E', 'F', 'G', 'H'];

function createSeats(seatLetters) {
  return Array.from({ length: 8 }, (_, index) => {
    const row = index + 1;

    return seatLetters.map((letter) => {
      const id = `${row}${letter}`;

      let category = 'standard';

      // Extra legroom seats
      if (['1C', '2A', '3E'].includes(id)) {
        category = 'extraLegroom';
      }

      // Premium seats
      if (['1E', '4A', '5H'].includes(id)) {
        category = 'premium';
      }

      return {
        id,
        row,
        letter,
        category,
        price: seatPrices[category],
        status: occupiedSeats.includes(id)
          ? 'occupied'
          : 'available',
      };
    });
  }).flat();
}

export const seatLayouts = {
  '3-2': {
    name: '3–2 Configuration',
    seats: createSeats(threeTwoSeats),
    aisleAfter: 3,
  },

  '2-3-2': {
    name: '2–3–2 Configuration',
    seats: createSeats(twoThreeTwoSeats),
    aisleAfter: [2, 5],
  },
};
