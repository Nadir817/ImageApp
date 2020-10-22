import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID U6n-FAyMoxvvM7QgQFmvhe2VSsoW8l0AOCxLilN54vQ'
    }
})