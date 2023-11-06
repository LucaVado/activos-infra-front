import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showNotification = (message, type) => {
    console.log('llego al toast')
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
