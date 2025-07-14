# Infinite Scroll Image Gallery (Intersection Observer API Demo)

This project is a real-life demo of the **Intersection Observer API** in a React (Vite, JavaScript) app. It implements an infinite scroll image gallery: as you scroll to the bottom, more images are loaded automatically.

## Features

- **Infinite scroll**: Loads more images as you reach the end of the gallery.
- **Intersection Observer API**: Efficiently detects when the last image is visible to trigger loading.
- **Modern UI**: Responsive, clean, and visually appealing.
- **No TypeScript**: Pure JavaScript React code.

## How it works

- The app displays a grid of images (from [Picsum Photos](https://picsum.photos/)).
- When the last image (loader) comes into view, the Intersection Observer triggers loading more images.
- This simulates a real-world infinite scroll experience, commonly used in social feeds, galleries, and more.

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run the development server

```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/App.jsx`: Main React component with Intersection Observer logic.
- `src/App.css`: Modern, responsive styles for the gallery.

## How Intersection Observer is used

- A `ref` is attached to a loader `<div>` at the end of the image list.
- The `IntersectionObserver` watches this loader.
- When the loader is visible (`isIntersecting`), more images are loaded.
- This is efficient and avoids scroll event listeners.

## Customization Ideas

- Add fade-in animation for images.
- Fetch real images from an API.
- Add error/loading states for network issues.
- Use for lazy-loading components, ads, or infinite feeds.

---

**Made with React, Vite, and the Intersection Observer API.**
