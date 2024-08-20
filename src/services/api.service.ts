import axios from "axios";

export class ApiService {
    baseUrl: string = process.env.API_URL || 'http://localhost:3000';

    async get(path: string) {
        return axios.get(`${this.baseUrl}${path}`)
            .catch((error) => {
                console.error(error);
                throw error;
            }
        );
    }

    async post(path: string, data: any) {
        return axios.post(`${this.baseUrl}${path}`, data)
            .catch((error) => {
                console.error(error);
                throw error;
            }
        );
    }

    async put(path: string, data: any) {
        return axios.put(`${this.baseUrl}${path}`, data)
            .catch((error) => {
                console.error(error);
                throw error;
            }
        );
    }
}
