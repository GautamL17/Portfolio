import React, { useState, useEffect } from "react";


const BottomInfo = () => {
    let text_color = "text-white";
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({ x: null, y: null });
    React.useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
        const [time, setTime] = useState({
        date: "",
        hour: 0,
        minute: 0,
        second: 0,
        period: "AM",
    });

    useEffect(() => {
        const updateClock = () => {
            let date = new Date();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let period = hour >= 12 ? "PM" : "AM";


            if (hour === 0) hour = 12;
            if (hour > 12) hour -= 12;

            setTime({
                date: date.toDateString(),
                hour,
                minute,
                second,
                period,
            });
        };

        updateClock();
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);


    const [scrollData, setScrollData] = useState({ deltaX: 0, deltaY: 0 });

    useEffect(() => {
        const handleWheel = (event) => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const isAtTop = window.scrollY <= 0;
            const isAtBottom = window.scrollY >= maxScroll;

            setScrollData((prev) => ({
                deltaX: isAtTop || isAtBottom ? prev.deltaX : prev.deltaX + event.deltaX,
                deltaY: isAtTop || isAtBottom ? prev.deltaY : prev.deltaY + event.deltaY,
            }));
        };

        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    const [battery, setBattery] = useState({ level: 100, charging: false });

    useEffect(() => {
        const getBatteryStatus = async () => {
            if (navigator.getBattery) {
                const battery = await navigator.getBattery();
                setBattery({ level: Math.round(battery.level * 100), charging: battery.charging });

                battery.addEventListener("levelchange", () => {
                    setBattery((prev) => ({ ...prev, level: Math.round(battery.level * 100) }));
                });
                battery.addEventListener("chargingchange", () => {
                    setBattery((prev) => ({ ...prev, charging: battery.charging }));
                });
            }
        };

        getBatteryStatus();
    }, []);

    return (
        <div className="w-[97.8%] border-t-2 border-zinc-800 z-100 bottom-4 fixed bg-[#f1faee]">
            <div className="flex justify-between items-center">
                <div className={`border-r-2 px-5 border-zinc-800 border-dotted flex justify-center items-center py-2 text-zinc-900 ${text_color}`}>
                    <a href="https://open.spotify.com/track/14mT8BCOXiUUcGlb7KujkT">
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center hover:animate-spin">
                        <box-icon name='spotify' type='logo' color='#DC2626' ></box-icon>
                        </div>
                        <div className="">
                            I think they call this love-Cover
                        </div>
                    </div>
                    </a>
                </div>
                <div className="flex justify-center items-center w">
                    
                    <div
                        className={`border-x-[2px] px-5 border-zinc-800 border-dotted flex flex-grow justify-center items-center py-2 text-zinc-900 ${text_color}`}
                    >
                        {time.date}
                    </div>


                    <div
                        className={`border-r-[2px] px-5 border-dotted border-zinc-800 flex flex-grow justify-center items-center py-2 text-zinc-900 ${text_color}`}
                    >
                        {time.hour < 10 ? `0${time.hour}` : time.hour}:
                        {time.minute < 10 ? `0${time.minute}` : time.minute}:
                        {time.second < 10 ? `0${time.second}` : time.second} {time.period}
                    </div>

                    <div
                        className={`border-r-[2px] px-5 border-dotted border-zinc-800 flex flex-grow justify-center items-center py-2 text-zinc-900 ${text_color}`}
                    >
                        Battery: {battery.level}% {battery.charging ? "⚡ " : ""}
                    </div>


                    <div
                        className={`w-20 border-r-[2px] px-5 border-dotted border-zinc-800 flex flex-grow justify-center items-center py-2 text-zinc-900 ${text_color}`}
                    >
                        X:{mousePosition.x}
                    </div>
                    <div
                        className={`w-20 flex flex-grow px-5 text-zinc-900 justify-center items-center ${text_color}`}
                    >
                        Y:{mousePosition.y}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomInfo;
