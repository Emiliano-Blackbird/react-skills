import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio7(): JSX.Element {
    // Estados tipados
    const [longitud, setLongitud] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    // Manejo del input
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const entrada = e.target.value;

        // Permitir borrar todo
        if (entrada === "") {
            setLongitud("");
            setError("");
            return;
        }

        // Solo números
        if (!/^\d+$/.test(entrada)) return;

        setLongitud(entrada);

        // Validación de reglas
        if (Number(entrada) < 4) {
            setError("La longitud debe ser mayor o igual a 4");
        } else {
            setError("");
        }
    };

    // Generar contraseña
    const handleGenerarPassword = (): void => {
        if (!longitud || Number(longitud) < 4) {
            setError("Longitud válida de mínimo 4 caracteres");
            return;
        }

        const caracteres =
            "abcdefghijklmnopqrstuvwxyz" +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            "0123456789" +
            ".,;:-_+*/¡!?¿#$%/()=";

        let contrasenia = "";

        for (let i = 0; i < Number(longitud); i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            contrasenia += caracteres[randomIndex];
        }

        setPassword(contrasenia);
        setError("");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">
                    Ejercicio 7
                </h2>

                <p className="text-gray-500">Generador de contraseñas aleatorias</p>

                <div className="flex flex-col gap-2 w-full">
                    <label
                        htmlFor="entrada"
                        className="text-gray-700 font-bold text-sm"
                    >
                        Longitud de la contraseña
                    </label>

                    <input
                        id="entrada"
                        value={longitud}
                        onChange={handleChange}
                        type="text"
                        inputMode="numeric"
                        placeholder="Ej: 12"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    />

                    <button
                        onClick={handleGenerarPassword}
                        disabled={!!error || !longitud}
                        className="mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                        Generar Contraseña
                    </button>
                </div>

                <div className="w-full text-center min-h-[3rem]">
                    {error && (
                        <p className="text-red-500 font-bold text-sm mt-2">
                            ⚠️ {error}
                        </p>
                    )}

                    {password && !error && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg break-all border">
                            <p className="text-sm text-gray-500 mb-1">
                                Tu contraseña es:
                            </p>
                            <p className="text-xl font-mono font-bold text-green-600 select-all">
                                {password}
                            </p>
                        </div>
                    )}
                </div>

                <div className="pt-4 border-t w-full text-center">
                    <Link
                        to="/"
                        className="text-blue-500 hover:text-blue-700 underline"
                    >
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
