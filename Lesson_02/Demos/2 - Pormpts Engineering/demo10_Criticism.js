// write a fuction thsat sends a HTTP get request to a server that returns an array of User objects
// use axios
const axios = require('axios');

async function fetchUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (Array.isArray(response.data)) {
            return response.data; // Return the array of User objects
        } else {
            throw new Error('Expected an array of users');
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}