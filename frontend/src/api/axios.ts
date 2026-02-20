import axios from "axios"

const api = axios.create({
    baseURL: "https://dummyjson.com", // The root URL for all API requests.
    timeout: 10000, // Maximum time (ms) before the request fails. Here: 10 seconds.
    headers: { // Default headers sent with every request.
        "Content-Type": "application/json", // ensures we are sending JSON.
    },
});

// Adds a function that runs before every request.
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Reads the JWT token from browser storage (if user is logged in).

        if(token) {
            config.headers.Authorization = `Bearer ${token}`; // Automatically attaches the token in the Authorization header.
        }

        console.log(
            `[API REQUEST] ${config.method?.toUpperCase()} ${config.url}`
        );

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// Adds a function that runs after every response.
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(!error.response) {
            console.log("Network error");
            return Promise.reject("Network error");
        }

        const { status } = error.response;

        switch(status) {
            case 401:
                console.log("Unauthorized - redirect to login");
                break;
            case 403:
                console.log("Forbidden");
                break;
            case 500:
                console.log("Server Error");
                break;
        }

        return Promise.reject(error);
    }
);

export default api;