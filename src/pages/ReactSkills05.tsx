import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio5(): JSX.Element {
    // Inputs como string (control total del input)
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");

    // Resultado puede ser número o null
    const [resultado, setResultado] = useState<number | null>(null);

    // Error siempre string
    const [error, setError] = useState<string>("");

    // --- VALIDACIÓN DE INPUT ---
    const validarInput = (valor: string): boolean => {
        // Permite números, negativos y decimales
        return /^-?\d*\.?\d*$/.test(valor);
    };

    // --- MANEJO DE INPUTS ---
    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
        setNumero: Dispatch<SetStateAction<string>>
    ): void => {
        const entrada = e.target.value;

        if (validarInput(entrada)) {
            setNumero(entrada);
            setError("");
        }
    };

    // --- VALIDACIÓN GENERAL ---
    const validarAntesDeOperar = (): boolean => {
        if (num1 === "" || num2 === "") {
            setError("Por favor ingresa ambos números");
            setResultado(null);
            return false;
        }
        return true;
    };

    // --- OPERACIONES ---
    const handleClickSuma = (): void => {
        if (!validarAntesDeOperar()) return;
        setResultado(Number(num1) + Number(num2));
        setError("");
    };

    const handleClickResta = (): void => {
        if (!validarAntesDeOperar()) return;
        setResultado(Number(num1) - Number(num2));
        setError("");
    };

    const handleClickMultiplicacion = (): void => {
        if (!validarAntesDeOperar()) return;
        setResultado(Number(num1) * Number(num2));
        setError("");
    };

    const handleClickDivision = (): void => {
        if (!validarAntesDeOperar()) return;

        if (Number(num2) === 0) {
            setError("No se puede dividir entre cero");
            setResultado(null);
            return;
        }

        setResultado(Number(num1) / Number(num2));
        setError("");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">
                    Calculadora
                </h2>

                <p className="text-gray-500">Ingresa dos números</p>

                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="num1" className="font-bold text-sm">
                            Número 1
                        </label>
                        <input
                            id="num1"
                            value={num1}
                            onChange={(e) => handleChange(e, setNum1)}
                            type="text"
                            inputMode="numeric"
                            placeholder="0"
                            className="border rounded p-2"
                        />

                        <label htmlFor="num2" className="font-bold text-sm mt-2">
                            Número 2
                        </label>
                        <input
                            id="num2"
                            value={num2}
                            onChange={(e) => handleChange(e, setNum2)}
                            type="text"
                            inputMode="numeric"
                            placeholder="0"
                            className="border rounded p-2"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                        onClick={handleClickSuma}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                        Sumar (+)
                        </button>

                        <button
                        onClick={handleClickResta}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                        Restar (-)
                        </button>

                        <button
                        onClick={handleClickMultiplicacion}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                        Multiplicar (×)
                        </button>

                        <button
                        onClick={handleClickDivision}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                        Dividir (/)
                        </button>
                    </div>
                </div>

                <div className="min-h-[3rem] text-center">
                    {error && (
                        <p className="text-red-500 font-bold">
                            ⚠️ {error}
                        </p>
                    )}

                    {resultado !== null && !error && (
                        <p className="text-2xl font-bold text-green-600">
                            Resultado: {resultado}
                        </p>
                    )}
                </div>

                <div className="pt-4 border-t w-full text-center">
                    <Link to="/" className="text-blue-500 underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
