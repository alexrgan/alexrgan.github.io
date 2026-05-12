import { useState, useRef } from "react";
import Me from "../../img/me_spheres.webp";
import TravelDeer from "../../img/travel_japan_deer.webp";
import TravelGuiyang from "../../img/travel_guiyang_night.webp";
import "./photo_easter_egg.css";

const TRAVEL_PHOTOS = [
    { src: TravelDeer, caption: "Nara, Japan" },
    { src: TravelGuiyang, caption: "Guiyang, China" },
];

const FLIP_THRESHOLD = 10;

const PhotoEasterEgg = () => {
    const [hearts, setHearts] = useState([]);
    const [flipped, setFlipped] = useState(false);
    const [carouselIdx, setCarouselIdx] = useState(0);
    const heartIdRef = useRef(0);
    const clickCountRef = useRef(0);

    const spawnHeart = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = heartIdRef.current++;
        setHearts((prev) => [...prev, { id, x, y }]);
        setTimeout(() => {
            setHearts((prev) => prev.filter((h) => h.id !== id));
        }, 1000);
    };

    const handleFrontClick = (e) => {
        spawnHeart(e);
        clickCountRef.current += 1;
        if (clickCountRef.current >= FLIP_THRESHOLD) {
            clickCountRef.current = 0;
            setFlipped(true);
        }
    };

    const handleBackPhotoClick = (e) => {
        e.stopPropagation();
        setCarouselIdx((i) => (i + 1) % TRAVEL_PHOTOS.length);
    };

    const handleFlipBack = (e) => {
        e.stopPropagation();
        setFlipped(false);
    };

    const current = TRAVEL_PHOTOS[carouselIdx];

    return (
        <div className={`pe-flip ${flipped ? "pe-flipped" : ""}`}>
            <div
                className="pe-face pe-front"
                onClick={handleFrontClick}
            >
                <img src={Me} alt="Alex Gan in front of the Amazon Spheres" className="a-img" />
                {hearts.map((h) => (
                    <svg
                        key={h.id}
                        className="pe-heart"
                        style={{ left: h.x, top: h.y }}
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                    >
                        <path
                            d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"
                            fill="#ff4d6d"
                        />
                    </svg>
                ))}
            </div>
            <div className="pe-face pe-back">
                <img
                    src={current.src}
                    alt={current.caption}
                    className="a-img"
                    onClick={handleBackPhotoClick}
                />
                <div className="pe-caption">{current.caption}</div>
                <button
                    className="pe-back-btn"
                    onClick={handleFlipBack}
                    aria-label="Flip back"
                >
                    ←
                </button>
                <div className="pe-dots">
                    {TRAVEL_PHOTOS.map((_, i) => (
                        <span
                            key={i}
                            className={`pe-dot ${i === carouselIdx ? "active" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoEasterEgg;
