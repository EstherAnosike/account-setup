import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-account-setup.firebaseio.com"
});

export default instance;