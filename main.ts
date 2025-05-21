import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

// 1. Crear el servidor
const server = new McpServer({
    name: 'miMCP',
    version: '1.0.0',
})

// 2. Definir las herramientas
server.tool(
    'obtener-tiempo', // Titulo de la herramienta
    'Herramienta para obtener el tiempo', // Descripción de la herramienta
    {
        city: z.string().describe('Nombre de ciudad'),
    }, // Parámetros de la herramienta
    async ({ city }) => {
        // Consultar latitud y longitud de la ciudad
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es&format=json`)
        const data = await response.json();

        if (data.length === 0) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `No se encontró información para la ciudad ${city}.`
                    }
                ]
            }
        }

        const { latitude, longitude } = data.results[0];

        // Consultar el tiempo actual de la ciudad
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=America%2FBogota`)
        const weatherData = await weatherResponse.json();

        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(weatherData, null, 2)
                }
            ]
        }
    }
)

// 3. Escuchar las conexiones del cliente
const transport = new StdioServerTransport();
server.connect(transport).catch(err => {
    console.error('Error al conectar:', err);
});