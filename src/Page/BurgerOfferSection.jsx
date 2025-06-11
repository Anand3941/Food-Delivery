import React, { useEffect, useState } from "react";
import burgerOffer from "../assets/timerThumb1_1.png";
import bgImage from "../assets/timerBg.png"; // Background image from assets

export default function BurgerOfferSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 257,
        hours: 14,
        minutes: 56,
        seconds: 1,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                        else {
                            hours = 23;
                            if (days > 0) days--;
                            else clearInterval(timer);
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-16 text-white"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-0" />

            {/* Decorative glows */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 blur-3xl opacity-30 rounded-full z-0" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-400 blur-3xl opacity-20 rounded-full z-0" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl w-full z-10">
                {/* Left: Burger Image */}
                <div className="bg-orange-500 rounded-[15%] p-10 lg:p-18 shadow-xl relative mt-16">
                    <img
                        src={burgerOffer}
                        alt="Burger"
                        className="w-[300px] md:w-[360px] lg:w-[400px] rounded-xl -mt-6"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="bg-[#1f1f1f] p-10 rounded-xl shadow-2xl max-w-md w-full">
                    <h3 className="text-orange-500 font-semibold text-sm uppercase flex items-center gap-2 mb-2">
                        <span role="img" aria-label="icon">🍔</span> Special Offer
                    </h3>
                    <h2 className="text-3xl font-bold leading-snug mb-6">
                        Get 30% Discount Every Item
                    </h2>

                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <TimeBox label="DAYS" value={timeLeft.days} />
                        <TimeBox label="HRS" value={timeLeft.hours} />
                        <TimeBox label="MINS" value={timeLeft.minutes} />
                        <TimeBox label="SECS" value={timeLeft.seconds} />
                    </div>

                    <button className="bg-[#ff003c] hover:bg-[#e60036] transition px-6 py-3 text-white font-bold rounded-md flex items-center gap-2">
                        ORDER NOW <span className="text-xl">➡️</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

function TimeBox({ value, label }) {
    return (
        <div className="bg-orange-500 text-center px-3 py-3 rounded-md shadow">
            <div className="text-2xl font-extrabold">{String(value).padStart(2, "0")}</div>
            <div className="text-xs font-medium mt-1">{label}</div>
        </div>
    );
}
