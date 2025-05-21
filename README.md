# 🌦️ Servidor MCP de Información del Tiempo

Este es un proyecto de ejemplo que implementa un servidor utilizando el Model Context Protocol (MCP) para proporcionar información del tiempo de diferentes ciudades.

## 📝 Descripción

Este servidor MCP ofrece una herramienta llamada `obtener-tiempo` que permite consultar el clima actual de cualquier ciudad. La herramienta utiliza APIs públicas para:

1. Convertir el nombre de una ciudad en coordenadas geográficas (latitud/longitud)
2. Obtener datos meteorológicos actuales para esas coordenadas

## 🔧 Requisitos

- Node.js (versión 18 o superior recomendada)
- pnpm (o npm/yarn)

## 📦 Instalación

Para instalar las dependencias necesarias, ejecuta:

```bash
pnpm install
```

## ▶️ Ejecución

Para iniciar el servidor MCP:

```bash
pnpm start
```

Si no tienes un script de inicio configurado en tu package.json, puedes ejecutar:

```bash
pnpm exec tsx main.ts
```

## 🧰 Herramientas disponibles

### 🌡️ obtener-tiempo

Esta herramienta permite obtener información meteorológica actual de una ciudad específica.

**Parámetros:**
- `city` (string): Nombre de la ciudad para la cual deseas conocer el clima

**Ejemplo de uso:**
```javascript
// Desde un cliente MCP
const resultado = await mcp.invoke('obtener-tiempo', { 
  city: 'Madrid' 
});
```

## 💻 Tecnologías utilizadas

- 🔄 [Model Context Protocol (MCP)](https://github.com/microsoft/modelcontextprotocol)
- ✅ [Zod](https://github.com/colinhacks/zod) para validación de esquemas
- 🌐 APIs de Open-Meteo para datos geográficos y meteorológicos

## 📁 Estructura del proyecto

- 📄 `main.ts`: Punto de entrada que define el servidor MCP y sus herramientas
- 📄 `package.json`: Configuración del proyecto y dependencias

## 📜 Licencia

MIT
