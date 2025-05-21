# BookMyHotel


A clean, responsive landing page for BookMyHotel built with React and pure CSS (no Tailwind or other CSS frameworks).

## Features

- Pure React implementation using JSX (no TypeScript)
- Standard CSS styling without external CSS frameworks
- Responsive design that works on all devices
- Component-based architecture for better organization and reusability
- Easy to customize and extend

This project is a full-featured **Hotel Booking and Management System** designed to modernize the hospitality experience using cutting-edge technologies. It incorporates **AI-powered modules**, **facial recognition**, **secure cryptographic models**, and **smart food ordering systems** to streamline hotel operations and enhance customer experience.

---

## 🚀 Features



### 🤖  Chatbot 
- Automates customer service to handle booking queries, FAQs, and support.

### 🧠 Facial Recognition for Check-In/Out
- Enables contactless check-in and check-out using facial recognition technology.
- Built using CNN-based facial recognition models (Deepface).

### 🔐 Cryptographic Security Model
- Ensures secure storage and transmission of user data and transactions.

### 🍽️ Food and Beverage System
- Allows guests to browse, order, and track food orders via a web interface.
- Smart suggestions based on preferences and order history.

---

## Project Structure

```
bookmyhotel-react/
├── public/
│   ├── images/          # Store all images here
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Destinations/
│   │   ├── Hotels/
│   │   └── Footer/
│   ├── data/            # Mock data for components
│   ├── pages/           # Page components
│   ├── App.js           # Main App component
│   ├── index.css        # Global styles
│   └── index.js         # Entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Subhraprakash17/BookMyHotel.git
   cd bookmyhotel-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Adding Images

For the project to work properly, you'll need to add the following images to the `public/images/` directory:

- logo.png - The BookMyHotel logo
- bg_2.jpg - Hero background image
- hotel-1.jpg to hotel-6.jpg - Hotel images
- destination-1.jpg to destination-6.jpg - Destination images

## Customization

- To modify the color scheme, edit the CSS variables in `src/index.css`
- To add or modify components, navigate to the respective component folder
- Data for hotels, destinations, and features can be modified in the `src/data/` directory

## Deployment

To build the project for production:

```bash
npm run build
```

This will create a `build` folder with all the optimized production files.

## License
Owner: Subhraprakash Santra
