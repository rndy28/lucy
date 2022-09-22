import { useEffect, useState, useRef } from "react";

const Clock = () => {
  const date = new Date();
  const savedCb = useRef<any>(null);
  const [datetime, setTime] = useState({
    date: date.toLocaleDateString(),
    time: date
      .toLocaleTimeString()
      .replace(/:\d{2}\s/, " ")
      .toLocaleLowerCase(),
  });

  const cb = () => {
    setTime({
      time: date
        .toLocaleTimeString()
        .replace(/:\d{2}\s/, " ")
        .toLocaleLowerCase(),
      date: date.toLocaleDateString(),
    });
  };

  useEffect(() => {
    savedCb.current = cb;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="mx-auto text-center">
      <h1 className="text-text text-7xl font-jetBrainsMono">{datetime.time}</h1>
      <h3 className="text-subtext1 text-xl mt-4">{datetime.date}</h3>
    </div>
  );
};

export default Clock;
