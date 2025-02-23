import React, { useState, useEffect } from 'react';

const ScrollTracker = () => {
    const [scrollData, setScrollData] = useState({ deltaX: 0, deltaY: 0, deltaZ: 0 });

    useEffect(() => {
        const handleScroll = (event) => {
            setScrollData({
                deltaX: event.deltaX,  // X-axis scroll (horizontal)
                deltaY: event.deltaY,  // Y-axis scroll (vertical)
                deltaZ: event.deltaZ,  // Z-axis scroll (depth, used for zooming)
            });
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="p-5 text-white bg-gray-900 min-h-screen">
            <h2 className="text-xl font-bold">Mouse Scroll Tracker</h2>
            <p>📌 Scroll Horizontally or Vertically to see updates</p>
            <div className="mt-4 p-3 border border-gray-500 rounded bg-gray-800">
                <p><strong>Scroll X:</strong> {scrollData.deltaX}</p>
                <p><strong>Scroll Y:</strong> {scrollData.deltaY}</p>
                <p><strong>Scroll Z:</strong> {scrollData.deltaZ}</p>
            </div>
        </div>
    );
};

export default ScrollTracker;
