# SkyReserve – Flight Seat Selection & Passenger Management

SkyReserve is a responsive airline booking dashboard built with **React.js**. It allows passengers to select aircraft seats, manage multiple travelers, choose onboard meals, and view booking charges with automatic price calculations.

The application supports two aircraft seating configurations: **3–2** and **2–3–2**.

## Features

### 1. Passenger Management
- Select between 1 and 4 passengers.
- Switch between passengers.
- View individual seat assignments.
- Maintain independent seat and meal selections for each passenger.

### 2. Interactive Seat Selection
- Supports 3–2 and 2–3–2 aircraft configurations.
- Displays row numbers and seat labels.
- Differentiates available, selected, assigned and occupied seats.
- Prevents selection of occupied seats.
- Prevents multiple passengers from sharing the same seat.
- Allows passengers to change or remove assigned seats.
- Handles seat assignments when switching aircraft configurations.

### 3. Seat Pricing

| Seat Category | Price |
|---|---:|
| Standard | ₹0 |
| Premium | ₹250 |
| Extra Legroom | ₹350 |

### 4. Meal Selection
Passengers can independently select or remove their meals.

| Meal Option | Price |
|---|---:|
| Vegetarian Meal | Free |
| Vegan Meal | Free |
| Standard Meal | Free |
| Premium Meal | ₹200 |
| Special Meal | ₹300 |

### 5. Booking Summary
- Displays passenger-wise seat and meal selections.
- Calculates individual seat charges.
- Calculates meal charges.
- Updates the grand total automatically.
- Reflects changes when seats or meals are selected or removed.

### 6. Responsive Design
The dashboard is designed to work across desktop, tablet and mobile screen sizes.

## Technology Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Programming Language:** JavaScript (JSX)
- **Styling:** CSS3
- **Icons:** Lucide React
- **Development Tools:** ESLint, npm

## Project Structure

```text
SkyReserve/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── FlightInfo.jsx
│   │   ├── PassengerList.jsx
│   │   ├── SeatMap.jsx
│   │   ├── SeatLegend.jsx
│   │   ├── BookingSummary.jsx
│   │   └── MealSelection.jsx
│   │
│   ├── data/
│   │   ├── passengers.js
│   │   └── seats.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd SkyReserve
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 5. Run ESLint

```bash
npm run lint
```

### 6. Create a production build

```bash
npm run build
```

## State Management and Implementation

The application uses React's `useState` hook to manage passenger information, selected passengers and aircraft configuration.

### Passenger Management

Passenger information is maintained in a shared state. Each passenger has an individual ID, assigned seat and selected meal.

### Seat Assignment

When a passenger selects a seat, the application updates that passenger's seat assignment.

The seat map checks existing assignments and occupied seat statuses to prevent invalid selections and duplicate seat assignments.

When the aircraft configuration changes, assignments that are no longer valid in the new configuration are cleared.

### Meal Selection

Each passenger maintains an independent meal selection. Switching passengers displays their respective selections without overwriting other passengers' choices.

### Price Calculation

The booking summary calculates seat charges and meal charges separately.

**Grand Total = Total Seat Charges + Total Meal Charges**

All calculations update automatically whenever a seat or meal selection changes.

## Testing and Validation

The following checks were performed during development:

- Passenger count changes.
- Passenger switching.
- Seat assignment and reassignment.
- Seat removal.
- Duplicate seat prevention.
- Occupied seat restrictions.
- Switching between aircraft configurations.
- Standard, Premium and Extra Legroom pricing.
- Independent meal selection.
- Meal removal and price recalculation.
- Combined booking total.
- Responsive layout checks.
- ESLint validation.
- Production build validation.

## Project Information

**Project Name:** SkyReserve  
**Project Type:** Frontend Web Application  
**Framework:** React.js  
**Purpose:** Flight Seat Selection & Passenger Management

The application uses mock flight, passenger, seat and meal data. No backend integration is required.

---

**Developed as part of a Frontend Developer Assessment.**