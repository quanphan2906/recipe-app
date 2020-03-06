import axios from "axios";

const get = async url => {
    let { data } = await axios(url);
    return data;  
}

export {
    get
}