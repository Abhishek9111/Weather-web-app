import axios from 'axios'


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY= 'adaec12c8102f56ae4cbb886c5060f65'

export const getData= async(city,country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}