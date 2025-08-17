from mcp.server.fastmcp import FastMCP
import requests

mcp = FastMCP("users-mcp")

@mcp.tool()
def get_user_data(self, id: str):
   response =  requests.get(f"https://jsonplaceholder.typicode.com/users/{id}")
   user = response.json()
   return user["name"]


mcp.run(transport="stdio")
