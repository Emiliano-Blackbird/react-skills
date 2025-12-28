import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center gap-6 mt-10">
            <h1 className="text-3xl font-bold text-orange-800">React + Typescript Skills</h1>
            <p className="text-gray-600">Click en una de las siguientes opciones</p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-2xl">
                <Link
                    to="/ReactSkills01"
                    className="p-4 bg-white rounded shadow hover:bg-blue-50 transition"
                >
                    1. Selector de colores de fondo
                </Link>
                <Link
                    to="/ReactSkills02"
                    className="p-4 bg-white rounded shadow hover:bg-blue-50 transition"
                >
                    2. Contador de clics
                </Link>
                <Link
                    to="/ReactSkills03"
                    className="p-4 bg-white rounded shadow hover:bg-blue-50 transition"
                >
                    3. Lista de tareas con localStorage
                </Link>
                <Link
                    to="/ReactSkills04"
                    className="p-4 bg-white rounded shadow hover:bg-blue-50 transition"
                >
                    4. Lista dinámica con filtro
                </Link>
                <Link
                    to="/ReactSkills05"
                    className="p-4 bg-white rounded shadow hover:bg-blue-50 transition"
                >
                    5. Calculadora básica
                </Link>
                <Link
                    to="/ReactSkills06"
                    className="p-4 bg-white rounded shadow hover:bg-blue-50 transition"
                >
                    6. Temporizador
                </Link>
            </div>
        </div>
    );
};

export default Home;
