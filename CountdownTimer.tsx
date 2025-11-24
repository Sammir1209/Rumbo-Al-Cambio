import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate?: string; // ISO string o algo que acepte new Date()
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEFAULT_TARGET = '2025-11-28T14:00:00'; // Inicio de las votaciones

function calculateTimeLeft(target: Date): TimeLeft {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const target = new Date(targetDate || DEFAULT_TARGET);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000); // Actualizamos cada segundo para mayor precisión

    return () => clearInterval(interval);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white rounded-2xl px-6 py-5 shadow-lg border border-[#001f3f]/15">
      <div className="text-left max-w-xs">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-[#c4a661] mb-1">
          Cuenta regresiva para las elecciones
        </p>
        <p className="text-xs sm:text-sm text-[#00385b]">
          Las votaciones serán el <span className="font-semibold text-[#c4a661]">28 de noviembre de 2025</span>, de 2:00 p.m. a 6:00 p.m.
        </p>
      </div>
      <div className="flex items-stretch gap-2 sm:gap-3 text-[11px] sm:text-xs">
        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-[#fff7e3] border border-[#c4a661]/40 min-w-[68px]">
          <div className="text-2xl sm:text-3xl font-extrabold text-[#c4a661] leading-none">{days}</div>
          <div className="mt-1 uppercase tracking-wide text-[#8a6b2d]">días</div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-[#f3f6fb] border border-[#001f3f]/15 min-w-[60px]">
          <div className="text-xl sm:text-2xl font-bold text-[#001f3f] leading-none">{hours}</div>
          <div className="mt-1 uppercase tracking-wide text-[#00385b]">horas</div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-[#f3f6fb] border border-[#001f3f]/15 min-w-[60px]">
          <div className="text-xl sm:text-2xl font-bold text-[#001f3f] leading-none">{minutes}</div>
          <div className="mt-1 uppercase tracking-wide text-[#00385b]">min</div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-[#f3f6fb] border border-[#001f3f]/15 min-w-[60px]">
          <div className="text-xl sm:text-2xl font-bold text-[#001f3f] leading-none">{seconds}</div>
          <div className="mt-1 uppercase tracking-wide text-[#00385b]">seg</div>
        </div>
      </div>
    </div>
  );
}

