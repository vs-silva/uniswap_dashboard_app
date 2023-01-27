import axios from "axios";

const APIEngineAdapter = axios.create({
    timeout: ( 60 * 1000 ),
    timeoutErrorMessage: 'Timeout error. Please verify service availability and network connection.',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default APIEngineAdapter;
