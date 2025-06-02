# React Shopping Cart App

A sleek and responsive shopping cart web application built with **React**, **React Router**, and **Bootstrap**, powered by the [FakeStoreAPI](https://fakestoreapi.com/). Users can browse products, adjust quantity, and simulate adding items to a cart. Built with clean code practices and component-based architecture.

## Features

- Browse products from a live API
- Increment/decrement item quantities
- Dynamic cart badge count in navbar
- Global cart state management via React hooks
- Handles 404 and routing errors gracefully using `errorElement`
- Fully responsive with `react-bootstrap`

## Tech Stack

- **React** (with Hooks)
- **React Router v6**
- **React-Bootstrap**
- **FakeStoreAPI** (REST endpoint)
- **React Icons** (for cart icon)

## Notable Implementations

- Used `useState` and `useEffect` to manage product fetching and cart logic
- Passed functions as props to maintain cart state across nested routes
- Implemented **error boundary route** using `errorElement` to gracefully handle broken paths or failed components
- Clean UI with equal card heights and polished user experience

## 💫 Smooth Animations with Framer Motion

The homepage uses [Framer Motion](https://www.framer.com/motion/) to animate the hero text, adding modern visual appeal and interactivity. The heading and paragraph smoothly fade in and slide into view when the page loads, creating a polished and engaging first impression.
