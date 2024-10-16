# The Wild Oasis

Welcome to **The Wild Oasis Hotel Management Application** documentation! The Wild Oasis is a user-friendly platform designed to efficiently manage hotel operations, including sales statistics, cabin management, user profiles, bookings, and customizable settings. It offers built-in authentication, secure database storage, and dark mode support—along with much more!

This project showcases advanced **JavaScript** and **Database Query** skills, integrated into a functional web application. It also aims to deepen my understanding of **React.js** through real-world implementation.

I strongly believe in the philosophy of **"Learning by Doing"**, which inspired the development of this project.

---

## 🎮 Demo Account

You can explore the application using the demo credentials below:

- **Email Address**: `admin@example.com`
- **Password**: `admin@example`

---

## Key Features 📝

### Authentication & Authorization

- **User Access**: Only hotel staff can log in and access the app's functionalities.
- **Sign-Up Restriction**: New users can only be added internally to ensure that only hotel employees receive access.
- **Profile Management**: Users can upload an avatar, change their name, and reset their password.

### Cabin Management

- **Cabin Overview**: A detailed table displaying all cabins, including cabin photos, name, capacity, price, and current discounts.
- **CRUD Operations**: Users can create, update, and delete cabins, including uploading images.

### Booking Management

- **Booking Table**: View all bookings with details like arrival and departure dates, status, payment amounts, cabin, and guest data.
- **Booking Status**: Bookings can be filtered by status—"unconfirmed," "checked in," or "checked out."
- **Booking Extras**: Other booking details include guest count, nights stayed, breakfast inclusion, and any special notes or observations.

### Check-In/Out System

- **Manage Bookings**: Users can check guests in and out or delete bookings. No editing is required during check-in/out.
- **Payment Handling**: Payments are processed outside the app, but users can confirm receipt of payments within the app.
- **Breakfast Option**: Guests can opt-in for breakfast during their stay, even at check-in.

### Guest Management

- **Guest Profiles**: Guests' full names, emails, national ID, nationality, and country flag are displayed for easy identification.

### Dashboard

- **At-a-Glance Data**: The dashboard displays key information for the last 7, 30, or 90 days, including:
  - List of guests checking in/out on the current day (with quick actions).
  - Recent statistics on bookings, sales, check-ins, and occupancy rate.
  - Sales chart showing daily total sales and extras (e.g., breakfast).
  - A chart that tracks the average length of stay, an essential hotel metric.

### Settings

- **Global Settings**: Users can configure settings such as:
  - Breakfast price
  - Minimum and maximum nights per booking
  - Maximum guests per booking

### Dark Mode

- **Dark Theme**: The app includes a dark mode option for a more comfortable user experience.
---

## 💻 Technology Stack

The Wild Oasis Hotel Management Application is built using modern technologies and tools, including:

- **React**: For developing an interactive and responsive user interface.
- **Supabase**: For real-time, secure database management.
- **@tanstack/react-query**: For efficient data fetching and state management.
- **date-fns**: For handling and formatting dates effortlessly.
- **react-router-dom**: For seamless navigation and routing.
- **recharts**: For creating customizable charts and visualizations.
- **styled-components**: For styling components with ease using CSS-in-JS.
- **react-hot-toast**: For elegant, customizable toast notifications.
- **react-icons**: For including various customizable icons.
- **react-hook-form**: For managing form state and validation efficiently.

---

## 🛠️ Installation Steps

To get started with The Wild Oasis locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/lgope/the-wild-oasis.git
```

2. **Install the required dependencies**:

```bash
npm install
```

3. **Start the development server**:

```bash
npm run dev
```

4. **Access the application**:

```
http://localhost:5173 or Your Local URL
```

---

---

