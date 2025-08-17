from mcp.server.fastmcp import FastMCP
import requests


mcp = FastMCP("name-origin")

@mcp.tool()
def predict_origin(self, name: str):
    response = requests.get(f"https://api.nationalize.io/?name={name}")
    return response.json()

mcp.run(transport='stdio')

