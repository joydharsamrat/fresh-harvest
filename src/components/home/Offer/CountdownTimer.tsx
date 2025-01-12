"use client";

import { questrial } from "@/app/fonts";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  const targetDateTime = new Date();
  targetDateTime.setDate(targetDateTime.getDate() + 4);

  return (
    <Countdown
      date={targetDateTime}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <div className="text-primary font-semibold">Time&apos;s up!</div>
          );
        } else {
          return (
            <div className="flex justify-start space-x-2 mt-2 text-gray-800">
              <div className="flex-1 bg-white shadow-lg flex flex-col items-center justify-center p-2 rounded-lg">
                <span className="block text-4xl ">{days}</span>
                <span className={questrial.className}>Days</span>
              </div>
              <div className="flex-1 bg-white shadow-lg flex flex-col items-center justify-center p-2 rounded-lg">
                <span className="block text-4xl">{hours}</span>
                <span className={questrial.className}>Hour</span>
              </div>
              <div className="flex-1 bg-white shadow-lg flex flex-col items-center justify-center p-2 rounded-lg">
                <span className="block text-4xl">{minutes}</span>
                <span className={questrial.className}>Min</span>
              </div>
              <div className="flex-1 bg-white shadow-lg flex flex-col items-center justify-center p-2 rounded-lg">
                <span className="block text-4xl">{seconds}</span>
                <span className={questrial.className}>Second</span>
              </div>
            </div>
          );
        }
      }}
    />
  );
};

export { CountdownTimer };
