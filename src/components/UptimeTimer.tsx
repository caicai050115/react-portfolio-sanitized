import { useEffect, useState } from 'react';

const birthTime = new Date('2026-09-01T00:00:00+08:00').getTime();

function pad(value: number) {
  return value.toString().padStart(2, '0');
}

function getUptime(now: number) {
  let totalSeconds = Math.max(0, Math.floor((now - birthTime) / 1000));
  const second = totalSeconds % 60;
  totalSeconds = Math.floor(totalSeconds / 60);
  const minute = totalSeconds % 60;
  totalSeconds = Math.floor(totalSeconds / 60);
  const hour = totalSeconds % 24;
  totalSeconds = Math.floor(totalSeconds / 24);
  const year = Math.floor(totalSeconds / 365);
  const day = totalSeconds % 365;

  return { year, day, hour, minute, second };
}

export default function UptimeTimer() {
  const [uptime, setUptime] = useState(() => getUptime(Date.now()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setUptime(getUptime(Date.now()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const reading = `${uptime.year} Year ${uptime.day} Day ${pad(uptime.hour)} Hour ${pad(uptime.minute)} Min ${pad(uptime.second)} S`;

  return (
    <p className="text-xs tabular-nums">
      <span className="sr-only">Site since </span>
      2026.09.01
      <span aria-hidden="true"> · </span>
      {reading}
    </p>
  );
}
