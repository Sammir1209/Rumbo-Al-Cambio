import { useEffect, useMemo, useState } from 'react';

function detectDeviceLabel() {
  if (typeof navigator === 'undefined') return 'PC';
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return 'Android';
  if (/iphone|ipad|ipod/.test(ua)) return 'iOS';
  if (/mobile/.test(ua)) return 'Mobile';
  return 'PC';
}

interface LoadingScreenProps {
  onFinish?: () => void;
  minimumDurationMs?: number;
}

export function LoadingScreen({ onFinish, minimumDurationMs = 2200 }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [phaseDone, setPhaseDone] = useState(false);

  const deviceLabel = useMemo(() => detectDeviceLabel(), []);
  const phrases = useMemo(
    () => [
      `Rumbo al Cambio — Loading ${deviceLabel}...`,
      `Preparando la experiencia en tu ${deviceLabel}...`,
      `Afinando propuestas para tu ${deviceLabel}...`,
    ],
    [deviceLabel]
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const timer = setTimeout(() => {
      setPhaseDone(true);
    }, minimumDurationMs);

    return () => {
      clearTimeout(timer);
      const elapsed = performance.now() - start;
      if (elapsed >= minimumDurationMs && onFinish) {
        onFinish();
      }
    };
  }, [minimumDurationMs, onFinish]);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length <= 1) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 600);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  useEffect(() => {
    if (phaseDone) {
      const timeout = setTimeout(() => {
        setVisible(false);
        if (onFinish) onFinish();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [phaseDone, onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-br from-[#001f3f] via-[#002b63] to-[#c4a661] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(0,0,0,0.35),_transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-5 px-6 text-center max-w-md">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/25 flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 rounded-full border-2 border-[#c4a661]/40 border-t-[#c4a661] animate-spin" />
          </div>
          <div className="text-left">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#c4a661] mb-1">Municipio Escolar 2026</p>
            <p className="text-xl sm:text-2xl font-bold tracking-wide leading-tight">Rumbo al Cambio</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-blue-50/90 min-h-[1.6rem] whitespace-pre-wrap max-w-xs">
          {displayText}
        </p>

        <div className="w-40 sm:w-52 h-1.5 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-[#c4a661] animate-[loading-bar_1.4s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

