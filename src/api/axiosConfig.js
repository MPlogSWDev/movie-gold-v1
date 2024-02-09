import axios from 'axios';
import cors from 'cors';

export default axios.create({
    baseURL:'http://localhost:8080/',
    headers: {"ngrok-skip-browser-warning": "true",
            // "Access-Control-Allow-Origin" : "*",
            // 'Content-Type': 'application/json',
            }
});