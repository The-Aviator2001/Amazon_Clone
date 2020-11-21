import axios from "axios"

const instance =axios.create({
    baseURL:"http://localhost:5001/challenge-9635d/us-central1/api" // THE API {cloud FUnction} URL
})

export default instance;