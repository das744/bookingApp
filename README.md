# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

# Expo Booking App with Firebase

This is a mobile booking app built with **Expo (React Native)**, featuring:

- Navigation Bar
- Banner with a booking form
- About Section
- Services Section
- Contact Section with Firebase-powered form
- Firebase integration for contact and booking storage
- Prevention of double bookings based on date/time

---

## 🔧 Features

- 📆 Booking form (date, time, and reason)
- ⚠️ Prevents double bookings via Firebase
- 📬 Contact form saves messages in Firebase
- 📲 Built using Expo and App Router (Next.js style)
- 🔥 Firebase Realtime Database integration

---

## 📁 Folder Structure
BookingApp/
├── app/
│   ├── _layout.tsx          // App router layout
│   ├── index.tsx            // Home page (includes all sections)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Banner.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── BookingForm.tsx
├── firebaseConfig.ts
├── tsconfig.json
├── app.json


---

##  Dependencies

Install the following libraries:

```bash
npx expo install firebase
npx expo install @react-native-community/datetimepicker
npx expo install react-native-safe-area-context
npm install react-native-dotenv
npm install react-native-screens react-native-gesture-handler
npm install react-native-calendars @react-native-picker/picker



```bash

## DevDependencies
npm install --save-dev babel-plugin-dotenv-import

##  firebase setup

## Booking Functionality

## Contact Form
--The contact form includes fields like name, email, message.
--On submission, form data is saved in Firebase.

## Testing
-- npx expo start
--npx expo start -c
