import axios from 'axios';



const KEY = 'AIzaSyAolPlIOTw67yf_Wih0jlUbZjHeRuUaJyc';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY // adds our key to the end of the baseURL
    }
})

