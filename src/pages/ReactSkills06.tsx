import { Link } from "react-router-dom";
import { useTimer } from "../hooks/useTimer";

export default function Ejercicio6() {
    const {
        time,
        isRunning,
        start,
        pause,
        reset,
        formatTime,
    } = useTimer();

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl flex flex-col gap-6">
                
                <header className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800">
                        Temporizador
                    </h2>
                    <p className="text-slate-500">
                        Inicio · Pausa · Reinicio
                    </p>
                </header>

                <div className="bg-slate-900 text-orange-400 font-mono text-4xl text-center py-4 rounded-xl tracking-widest">
                    {formatTime(time)}
                </div>

                <ul className="flex flex-col gap-3">
                    <li>
                        <button
                            disabled={isRunning}
                            onClick={start}
                            className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition"
                        >
                            ▶ Iniciar
                        </button>
                    </li>

                    <li>
                        <button
                            disabled={!isRunning}
                            onClick={pause}
                            className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition"
                        >
                            ⏸ Pausar
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={reset}
                            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition"
                        >
                            ⟲ Reiniciar
                        </button>
                    </li>
                </ul>

                <footer className="pt-4 border-t text-center">
                    <Link
                        to="/"
                        className="text-orange-600 hover:text-orange-700 font-medium underline"
                    >
                        ← Volver al inicio
                    </Link>
                </footer>
            </div>
        </div>
    );
}
