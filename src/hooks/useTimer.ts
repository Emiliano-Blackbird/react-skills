import { useEffect, useState } from "react";

export function useTimer() {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: number | undefined;

        if (isRunning) {
            intervalId = window.setInterval(() => {
                setTime(prev => prev + 10);
            }, 10);
        }

        return () => {
            if (intervalId !== undefined) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]);

    const start = (): void => setIsRunning(true);
    const pause = (): void => setIsRunning(false);
    const reset = (): void => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (ms: number): string => {
        const totalSeconds = Math.floor(ms / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor((totalSeconds / 60) % 60);
        const hours = Math.floor((totalSeconds / 3600) % 24);

        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return {
        time,
        isRunning,
        start,
        pause,
        reset,
        formatTime,
    };
}
