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
        return {
            content: [
                {
                    type: 'text',
                    text: `El tiempo en ${city} es soleado con una temperatura de 25 grados Celsius.`
                }
            ]
        }
    }
)

// 3. Escuchar las conexiones del cliente
// 3. Escuchar las conexiones del cliente
const transport = new StdioServerTransport();
server.connect(transport).catch(err => {
  console.error('Error al conectar:', err);
});