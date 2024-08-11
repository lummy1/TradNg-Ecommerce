import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASEURL;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDJmYjYxNDZjN2U1MzFjOTNhMzFiOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTQ4Mjk0OCwiZXhwIjoxNzAxNzQyMTQ4fQ.JSprOr6f_xYZvLmCpczzARDDiB0NsKDfMElBGGn22z8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({

    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})