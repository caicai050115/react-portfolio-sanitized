import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const birthTime = new Date('2026-09-01T00:00:00+08:00').getTime();
const revealStepMs = 42;
const holdMs = 3000;
const eraseTotalMs = 2000;
const fallbackWeather = {
  city: 'Shanghai',
  weather: 'Loading',
};

const weatherCodeMap: Record<number, string> = {
  0: 'Clear',
  1: 'Mainly Clear',
  2: 'Partly Cloudy',
  3: 'Cloudy',
  45: 'Fog',
  48: 'Fog',
  51: 'Drizzle',
  53: 'Drizzle',
  55: 'Drizzle',
  61: 'Rain',
  63: 'Rain',
  65: 'Rain',
  71: 'Snow',
  73: 'Snow',
  75: 'Snow',
  80: 'Rain Shower',
  81: 'Rain Shower',
  82: 'Rain Shower',
  95: 'Thunder',
};

type WeatherState = {
  city: string;
  weather: string;
};

type StatusToken = {
  text: string;
  kind?: 'time' | 'word' | 'uptime';
};

type StatusMessage = {
  label: string;
  tokens: StatusToken[];
};

function pad(value: number) {
  return value.toString().padStart(2, '0');
}

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

function getUptimeTokens(): StatusToken[] {
  let totalSeconds = Math.max(0, Math.floor((Date.now() - birthTime) / 1000));
  const second = totalSeconds % 60;
  totalSeconds = Math.floor(totalSeconds / 60);
  const minute = totalSeconds % 60;
  totalSeconds = Math.floor(totalSeconds / 60);
  const hour = totalSeconds % 24;
  totalSeconds = Math.floor(totalSeconds / 24);
  const year = Math.floor(totalSeconds / 365);
  const day = totalSeconds % 365;

  return [
    { text: `${year}Year`, kind: 'uptime' },
    { text: `${day}Day`, kind: 'uptime' },
    { text: `${pad(hour)}Hour`, kind: 'uptime' },
    { text: `${pad(minute)}Min`, kind: 'uptime' },
    { text: `${pad(second)}S`, kind: 'uptime' },
  ];
}

function formatCurrentTime() {
  const now = new Date();
  return `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())} ${pad(
    now.getHours(),
  )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function getTokenText(tokens: StatusToken[]) {
  return tokens.map((token) => token.text).join(' ');
}

function getBodyLength(tokens: StatusToken[]) {
  return tokens.reduce((sum, token) => sum + token.text.length, 0);
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation unavailable'));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      maximumAge: 1000 * 60 * 20,
      timeout: 3500,
    });
  });
}

async function fetchWeather(latitude = 0, longitude = 0): Promise<WeatherState> {
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code&timezone=auto`,
  );
  const weatherData = (await weatherResponse.json()) as {
    current?: { weather_code?: number };
  };
  const weatherCode = weatherData.current?.weather_code ?? 0;

  try {
    const cityResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=10&accept-language=en`,
    );
    const cityData = (await cityResponse.json()) as {
      address?: { city?: string; town?: string; county?: string; state?: string };
    };
    const address = cityData.address;
    const city = address?.city ?? address?.town ?? address?.county ?? address?.state ?? fallbackWeather.city;

    return {
      city,
      weather: weatherCodeMap[weatherCode] ?? 'Unknown',
    };
  } catch {
    return {
      city: fallbackWeather.city,
      weather: weatherCodeMap[weatherCode] ?? 'Unknown',
    };
  }
}

function AnimatedToken({
  characters,
  kind = 'word',
  className = '',
}: {
  characters: string[];
  kind?: StatusToken['kind'];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <span className={`status-token status-token-${kind} ${className}`}>
      <AnimatePresence initial={false}>
        {characters.map((character, index) => (
          <motion.span
            key={index}
            initial={reduceMotion ? false : { opacity: 0, x: index === 0 ? 0 : -2 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={/\d/.test(character) ? 'status-number' : 'status-unit'}
          >
            {character}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}

function SplitTitle({ text, visibleCount }: { text: string; visibleCount: number }) {
  const characters = useMemo(() => [...text].slice(0, visibleCount), [text, visibleCount]);

  return (
    <div className="status-title" aria-hidden="true">
      <AnimatedToken characters={characters} className="status-token-title" />
    </div>
  );
}

function SplitTokens({ tokens, visibleCount }: { tokens: StatusToken[]; visibleCount: number }) {
  const isUptime = tokens.every((token) => token.kind === 'uptime');
  const visibleTokens: Array<StatusToken & { characters: string[] }> = [];
  let consumed = 0;

  for (const token of tokens) {
    const tokenCharacters = [...token.text];
    const tokenVisibleCount = Math.max(0, Math.min(tokenCharacters.length, visibleCount - consumed));

    if (tokenVisibleCount > 0) {
      visibleTokens.push({
        ...token,
        characters: tokenCharacters.slice(0, tokenVisibleCount),
      });
    }

    consumed += tokenCharacters.length;
  }

  if (isUptime) {
    const rows = [
      visibleTokens.slice(0, 2),
      visibleTokens.slice(2, 4),
      visibleTokens.slice(4, 5),
    ];

    return (
      <div className="status-line status-line-uptime" aria-hidden="true">
        {rows.map((row, rowIndex) => (
          <div className="status-row" key={rowIndex}>
            {row.map((token, tokenIndex) => (
              <AnimatedToken
                key={tokenIndex}
                characters={token.characters}
                kind={token.kind}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="status-line" aria-hidden="true">
      {visibleTokens.map((token, index) => (
        <AnimatedToken
          key={index}
          characters={token.characters}
          kind={token.kind}
        />
      ))}
    </div>
  );
}

export default function UptimeTimer() {
  const [uptimeTokens, setUptimeTokens] = useState(getUptimeTokens);
  const [currentTime, setCurrentTime] = useState(formatCurrentTime);
  const [weather, setWeather] = useState<WeatherState>(fallbackWeather);
  const [mode, setMode] = useState(0);
  const [activeMessage, setActiveMessage] = useState<StatusMessage>({
    label: '系统存活时间',
    tokens: getUptimeTokens(),
  });
  const [titleVisibleCount, setTitleVisibleCount] = useState(0);
  const [bodyVisibleCount, setBodyVisibleCount] = useState(0);
  const activeTitleLengthRef = useRef(activeMessage.label.length);
  const activeBodyLengthRef = useRef(getBodyLength(activeMessage.tokens));

  const messages = useMemo(
    (): StatusMessage[] => [
      {
        label: '系统存活时间',
        tokens: uptimeTokens,
      },
      {
        label: '当前时间 天气 城市',
        tokens: [
          { text: currentTime.split(' ')[0], kind: 'time' as const },
          { text: currentTime.split(' ')[1], kind: 'time' as const },
          ...toTitleCase(weather.weather)
            .split(' ')
            .map((word) => ({ text: word, kind: 'word' as const })),
          ...toTitleCase(weather.city)
            .split(' ')
            .map((word) => ({ text: word, kind: 'word' as const })),
        ],
      },
    ],
    [currentTime, uptimeTokens, weather],
  );

  useEffect(() => {
    activeTitleLengthRef.current = activeMessage.label.length;
    activeBodyLengthRef.current = getBodyLength(activeMessage.tokens);
  }, [activeMessage]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setUptimeTokens(getUptimeTokens());
      setCurrentTime(formatCurrentTime());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;

    getPosition()
      .then((position) => fetchWeather(position.coords.latitude, position.coords.longitude))
      .catch(() => fetchWeather())
      .then((nextWeather) => {
        if (!cancelled) {
          setWeather(nextWeather);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setWeather({ ...fallbackWeather, weather: 'Unknown' });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let timeout = 0;
    const nextMessage = messages[mode];
    const titleLength = nextMessage.label.length;
    const bodyLength = getBodyLength(nextMessage.tokens);
    const revealLength = Math.max(titleLength, bodyLength);

    setActiveMessage(nextMessage);
    setTitleVisibleCount(0);
    setBodyVisibleCount(0);

    const reveal = (index: number) => {
      setTitleVisibleCount(Math.min(index, titleLength));
      setBodyVisibleCount(Math.min(index, bodyLength));

      if (index < revealLength) {
        timeout = window.setTimeout(() => reveal(index + 1), revealStepMs);
        return;
      }

      timeout = window.setTimeout(() => {
        const eraseTitleLength = activeTitleLengthRef.current;
        const eraseBodyLength = activeBodyLengthRef.current;
        const eraseLength = Math.max(eraseTitleLength, eraseBodyLength);
        const eraseStepMs = Math.max(20, Math.floor(eraseTotalMs / Math.max(eraseLength, 1)));

        const erase = (nextIndex: number) => {
          setTitleVisibleCount(Math.min(nextIndex, eraseTitleLength));
          setBodyVisibleCount(Math.min(nextIndex, eraseBodyLength));

          if (nextIndex > 0) {
            timeout = window.setTimeout(() => erase(nextIndex - 1), eraseStepMs);
            return;
          }

          setMode((value) => (value + 1) % 2);
        };

        erase(eraseLength - 1);
      }, holdMs);
    };

    timeout = window.setTimeout(() => reveal(1), 180);

    return () => window.clearTimeout(timeout);
  }, [mode]);

  useEffect(() => {
    setActiveMessage(messages[mode]);
  }, [messages, mode]);

  return (
    <aside
      className="absolute left-5 top-1/2 z-10 hidden w-60 -translate-y-1/2 text-black xl:block 2xl:w-64"
      aria-label={`${activeMessage.label} ${getTokenText(activeMessage.tokens)}`}
    >
      <div className="status-header" key={`status-header-${mode}`}>
        <SplitTitle text={activeMessage.label} visibleCount={titleVisibleCount} />
        <div className="h-px w-full bg-black" aria-hidden="true" />
      </div>
      <div key={`status-body-${mode}`}>
        <SplitTokens tokens={activeMessage.tokens} visibleCount={bodyVisibleCount} />
      </div>
    </aside>
  );
}
