# 🌤️ ClimaApi

> Aplicación web moderna para consultar el clima de cualquier ciudad del mundo en tiempo real

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-orange)](https://openweathermap.org/api)

## 📋 Descripción

**ClimaApi** es una aplicación web desarrollada con **React** y **Vite** que permite a los usuarios obtener información meteorológica en tiempo real de cualquier ciudad y país del mundo. La aplicación utiliza la API de OpenWeatherMap para proporcionar datos precisos y actualizados sobre las condiciones climáticas.

## ✨ Características

- 🔍 **Búsqueda por ciudad y país**: Ingresa el nombre de la ciudad y el país para obtener información detallada
- 🌡️ **Información meteorológica completa**: Temperatura, humedad, velocidad del viento, descripción del clima
- 🎨 **Interfaz moderna**: Diseño atractivo utilizando CSS Grid para un layout responsivo
- ⚡ **Rendimiento optimizado**: Construido con Vite para una experiencia de desarrollo rápida
- 🔄 **Actualización en tiempo real**: Datos actualizados directamente desde la API de OpenWeatherMap

## 🛠️ Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo frontend
- **Axios** - Cliente HTTP para realizar peticiones a la API
- **CSS Grid** - Sistema de diseño para crear layouts responsivos
- **Hooks de React**: `useState` y `useEffect` para el manejo del estado y efectos secundarios

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Una cuenta en [OpenWeatherMap](https://openweathermap.org/) para obtener tu API Key

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/BryanGallo/ClimaApi.git
cd ClimaApi
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_KEY=tu_clave_de_api_aqui
```

**¿Cómo obtener tu API Key?**

1. Regístrate en [OpenWeatherMap](https://openweathermap.org/appid)
2. Ve a la sección "API keys" en tu cuenta
3. Copia tu API Key
4. Pégala en el archivo `.env`

> ⚠️ **Importante**: Nunca subas tu archivo `.env` al repositorio. Ya está incluido en `.gitignore`

### 4. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne)

## 📖 Uso

1. **Abrir la aplicación** en tu navegador
2. **Ingresar el nombre de la ciudad** y el país en el campo de búsqueda
3. **Presionar Enter** o hacer clic en el botón de búsqueda
4. **Visualizar la información** meteorológica de la ciudad seleccionada

### Ejemplo de búsqueda

- Ciudad: `Madrid`
- País: `España`

O simplemente:

- Ciudad: `New York`
- País: `USA`

## 📁 Estructura del Proyecto

```
ClimaApi/
├── public/          # Archivos estáticos
├── src/            # Código fuente de la aplicación
│   ├── components/ # Componentes de React
│   ├── services/   # Servicios para llamadas a la API
│   └── styles/     # Archivos CSS
├── .env            # Variables de entorno (no incluido en git)
├── .gitignore      # Archivos ignorados por git
├── index.html      # Punto de entrada HTML
├── package.json    # Dependencias del proyecto
├── vite.config.js  # Configuración de Vite
└── README.md       # Este archivo
```

## 🎯 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto:

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**
