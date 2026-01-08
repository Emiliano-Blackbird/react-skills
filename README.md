# React Skills - Ejercicios Prácticos con TypeScript

Un proyecto interactivo diseñado para practicar y demostrar habilidades avanzadas en React con TypeScript. Esta aplicación contiene una serie de ejercicios prácticos que cubren conceptos fundamentales y avanzados del desarrollo con React, incluyendo manejo de estado, hooks personalizados, persistencia de datos, y buenas prácticas de tipado.

## 🚀 Características

- **9 ejercicios prácticos** que cubren diferentes aspectos de React
- **TypeScript completo** con tipado estricto
- **Interfaz moderna** construida con Tailwind CSS
- **Enrutamiento** con React Router
- **Persistencia de datos** usando localStorage
- **Hooks personalizados** para lógica reutilizable
- **Despliegue en GitHub Pages** listo para producción

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Router DOM** - Enrutamiento
- **ESLint** - Linting y calidad de código
- **Yarn** - Gestor de paquetes

## 📋 Ejercicios Incluidos

### 1. Selector de Colores de Fondo
- Generación aleatoria de colores hexadecimales
- Actualización dinámica del fondo de la página
- Transiciones suaves con CSS

### 2. Contador de Clics
- Manejo básico de estado con `useState`
- Actualización de estado basada en el estado anterior
- Interfaz responsiva con Tailwind

### 3. Lista de Tareas con localStorage
- Persistencia de datos en el navegador
- Operaciones CRUD básicas (Crear, Leer, Eliminar)
- Validación de entrada de usuario

### 4. Lista Dinámica con Filtro
- Filtrado en tiempo real de arrays
- Estado derivado (computed state)
- Búsqueda insensible a mayúsculas/minúsculas

### 5. Calculadora Básica
- Validación de entrada numérica
- Operaciones matemáticas básicas
- Manejo de errores (división por cero)

### 6. Temporizador
- Hook personalizado `useTimer`
- Intervalos y limpieza de efectos
- Formateo de tiempo (HH:MM:SS)

### 7. Generador de Contraseñas Aleatorias
- Generación de strings aleatorios
- Validación de longitud mínima
- Copia al portapapeles

### 8. Contador de Palabras y Caracteres
- Procesamiento de texto en tiempo real
- Expresiones regulares para limpieza de texto
- Conteo inteligente (excluyendo espacios)

### 9. Lista de Tareas Avanzada (localStorage)
- Modelo de datos bien tipado
- Toggle de estados de tareas
- Limpieza de tareas completadas

## 🏃‍♂️ Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- Yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Emiliano-Blackbird/react-skills.git
cd react-skills

# Instalar dependencias
yarn install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción
```bash
# Construir la aplicación
yarn build

# Vista previa del build
yarn preview
```

### Despliegue en GitHub Pages
```bash
# Construir y desplegar
yarn deploy
```

## 📁 Estructura del Proyecto

```
react-skills/
├── public/                 # Archivos estáticos
├── src/
│   ├── hooks/
│   │   └── useTimer.ts     # Hook personalizado para temporizador
│   ├── pages/              # Componentes de páginas
│   │   ├── Home.tsx        # Página principal con navegación
│   │   └── ReactSkills01.tsx - ReactSkills09.tsx
│   ├── App.tsx             # Componente principal con rutas
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── package.json            # Dependencias y scripts
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Este archivo
```

## 🎯 Conceptos Aprendidos

Este proyecto demuestra el dominio de:

- **Manejo de Estado**: `useState`, `useEffect`
- **Hooks Personalizados**: Creación y uso de hooks reutilizables
- **Tipado Avanzado**: Interfaces, tipos genéricos, tipado de eventos
- **Persistencia**: localStorage API
- **Enrutamiento**: React Router con rutas anidadas
- **Estilos**: Tailwind CSS para diseño responsivo
- **Build Tools**: Vite para desarrollo y producción
- **Control de Calidad**: ESLint con reglas de TypeScript

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Emiliano Blackbird** - [GitHub](https://github.com/Emiliano-Blackbird)