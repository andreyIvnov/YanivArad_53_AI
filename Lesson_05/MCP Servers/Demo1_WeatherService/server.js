import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"

const server = new McpServer(
    {
        name: "WeatherService",
        version: "1.0.0"
    }
)

import { z } from "zod";


server.tool(
    "getWeather",
    { city: z.string() },
    async ({city}) => {

        // logic

        return {
            content: [
                {
                    type: "text",
                    text: `The weather in ${city} is sunny!`,
                },
            ],

        }
    }
)


import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
const transport = new StdioServerTransport();
await server.connect(transport)

