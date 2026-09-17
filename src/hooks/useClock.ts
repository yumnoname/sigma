"use client";

import { useEffect, useState } from "react";

/** Returns "HH:MM:SS" ticking every second, plus a UTC offset label. */
export function useClock(utcOffsetHours = 7) {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const local = new Date(utc + utcOffsetHours * 3600000);
      setTime(local.toTimeString().slice(0, 8));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [utcOffsetHours]);

  return { time, label: `UTC+${utcOffsetHours}` };
}
