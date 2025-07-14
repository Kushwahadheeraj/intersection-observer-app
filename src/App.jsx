import { useEffect, useRef, useState } from "react";
import "./App.css";

// Dummy image generator (Picsum Photos)
const getImageUrl = (id) => `https://picsum.photos/id/${id % 1000}/400/300`;

function App() {
  const [images, setImages] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setImages((prev) => [
              ...prev,
              ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1),
            ]);
            setLoading(false);
          }, 1000); // Simulate network delay
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loading]);

  return (
    <div className="infinite-scroll-app">
      <h1>
        Infinite Image Gallery{" "}
        <span role="img" aria-label="gallery">
          🖼️
        </span>
      </h1>
      <p>Scroll down to load more images. Uses Intersection Observer API.</p>
      <div className="image-list">
        {images.map((id) => (
          <div className="image-card" key={id}>
            <img src={getImageUrl(id)} alt={`Random ${id}`} loading="lazy" />
          </div>
        ))}
        <div ref={loaderRef} className="loader">
          {loading ? "Loading more images..." : "Scroll to load more"}
        </div>
      </div>
    </div>
  );
}

export default App;
