import axios from 'axios';

export default axios.create({
    baseURL:'https://fa42-2601-240-ce00-9550-d4af-301f-894f-47dd.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
})