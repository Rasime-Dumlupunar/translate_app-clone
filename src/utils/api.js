import axios from "axios";

export default axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    headers: {
      'x-rapidapi-key': 'c548d77868mshcee01d17b8c8bbep150604jsn769a0b8cdc94',
      'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
    },
});