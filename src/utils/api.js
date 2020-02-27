import axios from "axios";
import { MY_HEADERS, HEADER_NO_BEARER } from "./constant";

export const fetchData = async (getdata, good, bad) => {
    try{
        const { data } = await axios.get(getdata, MY_HEADERS)
        good(data)

    }catch(e){
        // console.log(e.response.data)
        bad(e)
    }
}

export const postData = async (urlpost, sendata, good, bad) => {
    try{
        const { data } = await axios.post(urlpost, JSON.stringify(sendata),  MY_HEADERS)
        good(data)

    }catch(e){
        // console.log(e.response.data)
        bad(e)
    }
}

export const registration = async (urlpost, sendata, good, bad) => {
    try{
        const { data } = await axios.post(urlpost, JSON.stringify(sendata),  HEADER_NO_BEARER)
        good(data)

    }catch(e){
        // console.log(e.response.data)
        bad(e)
    }
}
